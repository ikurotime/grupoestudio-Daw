import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import Input from '@/components/Input'
import Layout from '../components/Layout/Layout'
import { supabase } from '../supabaseClient'
import { useLocation } from 'wouter'
import { useState } from 'react'

export default function SignIn() {
  const [, setLocation] = useLocation()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    })
    if (error) {
      console.error('Error:', error.message)
    }
    setLocation('/')
  }
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
            <>
              <Input
                type='text'
                label='Correo'
                htmlName='email'
                onChange={handleChange}
              />
              <Input
                type='password'
                label='Contraseña'
                htmlName='password'
                onChange={handleChange}
              />
              <Button onClick={handleSignIn}>Iniciar sesión</Button>
            </>
            <>
              <span className='text-center'>o</span>
              <Button onClick={() => handleSignInWith('github')}>
                Iniciar sesión con Github
              </Button>
            </>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
