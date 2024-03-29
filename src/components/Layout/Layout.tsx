import Navbar from './Navbar'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/supabaseClient'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<User | null>()
  supabase.auth.onAuthStateChange((event, session) => {
    //console.log('event', event)
    //console.log('session', session)
    if (event === 'SIGNED_IN') {
      setUserData(session?.user)
    }
    if (event === 'SIGNED_OUT') {
      setUserData(null)
    }
  })
  return (
    <div className='flex flex-1 w-full max-w-[1440px] min-h-screen flex-col gap-1 mx-auto'>
      <Navbar user={userData} />
      {children}
    </div>
  )
}
