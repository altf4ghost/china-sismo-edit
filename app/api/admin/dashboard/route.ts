import { DashboardBudgetRequest } from '@/types/dashboard';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

type BudgetRequest = {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  services: string;
  status: string;
  priority: string;
  createdAt: Date;
};

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const requests: DashboardBudgetRequest[] = await prisma.budgetRequest.findMany({
  orderBy: { createdAt: 'desc' },
  select: {
    id: true,
    email: true,
    createdAt: true,
    phone: true,
    companyName: true,
    contactName: true,
    projectType: true,
    location: true,
    services: true,
    status: true,
    priority: true,
  },
});

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));

    const stats = {
      totalRequests: requests.length,
      pendingRequests: requests.filter(r => r.status === 'pending').length,
      thisMonthRequests: requests.filter(r => new Date(r.createdAt) >= startOfMonth).length,
      thisWeekRequests: requests.filter(r => new Date(r.createdAt) >= startOfWeek).length,
    };

    return NextResponse.json({ requests, stats });
  } catch (error) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
