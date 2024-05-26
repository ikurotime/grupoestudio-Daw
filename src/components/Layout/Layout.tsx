import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/supabaseClient'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  const [session, setSession] = useState<Session | null>()
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className='flex flex-col flex-1 w-full min-h-screen gap-1 mx-auto bg-[#f5f5f5]'>
      <Navbar session={session} />
      {children}
    </div>
  )
}
