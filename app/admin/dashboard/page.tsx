
'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  Mail,
  Phone,
  Building2,
  Clock,
  Star,
  Filter,
  Download,
  Eye,
  LogOut
} from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface BudgetRequest {
  id: string
  companyName: string
  contactName: string
  email: string
  phone: string
  projectType: string
  location: string
  services: string[]
  status: string
  priority: string
  createdAt: string
}

interface DashboardStats {
  totalRequests: number
  pendingRequests: number
  thisMonthRequests: number
  thisWeekRequests: number
}

export default function AdminDashboard() {
  const session = useSession()
  const router = useRouter()
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalRequests: 0,
    pendingRequests: 0,
    thisMonthRequests: 0,
    thisWeekRequests: 0
  })
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  // Redirect if not authenticated
  useEffect(() => {
    if (session.status === 'loading') return
    if (!session.data) {
      router.push('/admin/login')
      return
    }
  }, [session.data, session.status, router])

  // Fetch data
  useEffect(() => {
    if (session.data) {
      fetchDashboardData()
    }
  }, [session.data])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      if (response.ok) {
        const data = await response.json()
        setBudgetRequests(data.requests || [])
        setStats(data.stats || stats)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateRequestStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/budget-requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      
      if (response.ok) {
        fetchDashboardData() // Refresh data
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-600'
      case 'reviewed': return 'bg-blue-600'
      case 'contacted': return 'bg-purple-600'
      case 'closed': return 'bg-green-600'
      default: return 'bg-gray-600'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-600'
      case 'high': return 'bg-orange-600'
      case 'normal': return 'bg-blue-600'
      case 'low': return 'bg-gray-600'
      default: return 'bg-gray-600'
    }
  }

  const filteredRequests = budgetRequests.filter(request => {
    if (filter === 'all') return true
    return request.status === filter
  }).sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
    return 0
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  if (!session.data) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                <h1 className="text-2xl font-bold">SismoPRO</h1>
              </Link>
              <span className="text-gray-500">|</span>
              <h2 className="text-xl text-white">Dashboard Administrativo</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Olá, {session.data.user?.name || session.data.user?.email}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total de Orçamentos</CardTitle>
              <FileText className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalRequests}</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.pendingRequests}</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Este Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.thisMonthRequests}</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Esta Semana</CardTitle>
              <Calendar className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.thisWeekRequests}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Pendentes</SelectItem>
              <SelectItem value="reviewed">Revisados</SelectItem>
              <SelectItem value="contacted">Contatados</SelectItem>
              <SelectItem value="closed">Fechados</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="oldest">Mais antigos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget Requests Table */}
        <Card className="bg-slate-900 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Solicitações de Orçamento ({filteredRequests.length})</CardTitle>
            <CardDescription className="text-gray-400">
              Gerencie todas as solicitações de orçamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredRequests.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  Nenhuma solicitação encontrada.
                </div>
              ) : (
                filteredRequests.map((request) => (
                  <div key={request.id} className="border border-slate-700 rounded-lg p-4 hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{request.companyName}</h3>
                          <Badge className={`${getStatusColor(request.status)} text-white`}>
                            {request.status === 'pending' ? 'Pendente' :
                             request.status === 'reviewed' ? 'Revisado' :
                             request.status === 'contacted' ? 'Contatado' : 'Fechado'}
                          </Badge>
                          <Badge className={`${getPriorityColor(request.priority)} text-white`}>
                            {request.priority === 'urgent' ? 'Urgente' :
                             request.priority === 'high' ? 'Alta' :
                             request.priority === 'normal' ? 'Normal' : 'Baixa'}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-blue-400" />
                            {request.contactName}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-blue-400" />
                            {request.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-blue-400" />
                            {request.phone}
                          </div>
                          <div className="flex items-center">
                            <Building2 className="w-4 h-4 mr-2 text-blue-400" />
                            {request.projectType}
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <p className="text-xs text-gray-400">
                            Serviços: {request.services?.join(', ') || 'N/A'}
                          </p>
                          <p className="text-xs text-gray-500">
                            Criado em: {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Select
                          value={request.status}
                          onValueChange={(newStatus) => updateRequestStatus(request.id, newStatus)}
                        >
                          <SelectTrigger className="w-[140px] bg-slate-800 border-slate-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600">
                            <SelectItem value="pending">Pendente</SelectItem>
                            <SelectItem value="reviewed">Revisado</SelectItem>
                            <SelectItem value="contacted">Contatado</SelectItem>
                            <SelectItem value="closed">Fechado</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-slate-600 text-white hover:bg-slate-800"
                          onClick={() => router.push(`/admin/budget-requests/${request.id}`)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
