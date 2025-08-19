
'use client'

import { SessionProvider } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{children}</>
  }

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
