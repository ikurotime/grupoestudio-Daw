import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

import EditIcon from '../components/Icons/Edit'
import { InputWithLabel } from '@/components/InputWithLabel'
import Layout from '../components/Layout/Layout'
import { User } from '@prisma/client'
import { supabase } from '@/supabaseClient'

//import escribiendo from '../imagenes/escribiendo.png'

export default function Dashboard() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    supabase.auth.getSession().then((n) =>
      supabase
        .from('User')
        .select('*')
        .eq('id', n.data.session?.user.id)
        .then((n) => setUser(n.data![0]))
    )
  }, [])
  return (
    <Layout>
      <div className='flex flex-col flex-1 w-full bg-white'>
        <div className='flex h-full gap-4'>
          <div className='flex flex-col flex-1 max-w-[640px] py-3 mx-auto gap-4'>
            <Card className='flex items-center w-full p-4 border border-gray-400 rounded-lg 6 '>
              <div className='flex-grow'>
                <CardTitle className='mb-4'>Mi foto</CardTitle>
                <CardContent>
                  <img
                    src='/img/perfil.png'
                    className='w-24 h-24 rounded-full'
                    alt='foto-perfil'
                  />
                </CardContent>
              </div>
              <a className='flex items-center self-start'>
                <EditIcon />
              </a>
            </Card>

            <Card className='flex flex-col w-full p-4 border border-gray-400 rounded-lg '>
              <CardTitle>Identidad</CardTitle>
              <CardContent className='flex flex-col gap-4 px-0 py-4'>
                <InputWithLabel
                  id='Nombre'
                  name='name'
                  label='Nombre'
                  placeholder='John'
                  value={user?.name || ''}
                  type='text'
                />
                <InputWithLabel
                  id='Apellidos'
                  name='surname'
                  label='Apellidos'
                  placeholder='Doe'
                  type='text'
                />
              </CardContent>
            </Card>

            <Card className='flex flex-col w-full p-4 border border-gray-400 rounded-lg '>
              <CardTitle>Email</CardTitle>
              <CardContent className='flex flex-col gap-4 px-0 py-4'>
                <InputWithLabel
                  id='Email'
                  name='email'
                  value={user?.email || ''}
                  label='Email'
                  placeholder='user@email.com'
                  type='text'
                />
              </CardContent>
            </Card>

            <Card className='flex flex-col w-full p-4 border border-gray-400 rounded-lg '>
              <CardTitle>Teléfono</CardTitle>
              <CardContent className='flex flex-col gap-4 px-0 py-4'>
                <InputWithLabel
                  id='phone_number'
                  name='number'
                  label='number'
                  placeholder='677 777 777'
                  type='text'
                />
              </CardContent>
            </Card>

            {/* <Card className='flex flex-col w-full p-4 border border-gray-400 rounded-lg '>
              <CardTitle>Password</CardTitle>
              <CardContent className='flex flex-col gap-4 px-0 py-4'>
                <InputWithLabel
                  id='Contraseña'
                  name='password'
                  label='Contraseña'
                  placeholder=''
                  type='password'
                />
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
