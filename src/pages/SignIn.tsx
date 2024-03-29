import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import Layout from '../components/Layout/Layout'
import { supabase } from '../supabaseClient'

export default function SignIn() {
  const handleSignInWith = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider
    })
    if (error) {
      console.error('Error:', error.message)
    }
  }
  return (
    <Layout>
      <div className='m-auto w-fit'>
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>Inicia sesión con tu proveedor</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4 w-fit'>
            <Button
              onClick={() => handleSignInWith('google')}
              variant='secondary'
            >
              Iniciar sesión con Google
            </Button>
            <Button onClick={() => handleSignInWith('github')}>
              Iniciar sesión con Github
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
