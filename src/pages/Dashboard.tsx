import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '@/components/ui/button'
import EditIcon from '../components/Icons/Edit'
import { InputWithLabel } from '@/components/InputWithLabel'
import Layout from '../components/Layout/Layout'
import { Switch } from '@/components/ui/switch'
import { Tables } from 'database.types'
import { supabase } from '@/supabaseClient'
import { useToast } from '@/components/ui/use-toast'

export default function Dashboard() {
  const { toast } = useToast()
  const [user, setUser] = useState<Tables<'User'>>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profileTitle: '',
    profileDescription: '',
    location: '',
    role: 1
  })

  const [volunteerFeatures, setVolunteerFeatures] = useState(
    user?.role ? true : false
  )
  useEffect(() => {
    setVolunteerFeatures(user?.role === 2)
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      profileTitle: user?.profileTitle || '',
      profileDescription: user?.profileDescription || '',
      location: user?.location || '',
      role: user?.role || 1
    })
  }, [user?.role])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    if (!user) return
    if (formData.role === 2) {
      if (
        !formData.profileTitle ||
        !formData.profileDescription ||
        !formData.location
      ) {
        alert('Por favor rellene todos los campos')
        return
      }
    }
    const { data, error } = await supabase
      .from('User')
      .update(formData)
      .eq('id', user?.id)
    console.log(data, error)
    console.log(user?.id)
    if (error) {
      toast({
        title: 'Error al guardar los cambios',
        description: 'Por favor, intentalo de nuevo.'
      })
      return
    }

    toast({
      title: 'Cambios guardados',
      description: 'Se han guardado los cambios correctamente'
    })
  }
  useEffect(() => {
    supabase.auth.getSession().then((n) =>
      supabase
        .from('User')
        .select('*')
        .eq('id', n.data.session!.user.id)
        .then((n) => {
          setUser(n.data![0])
          setFormData({
            name: n.data![0].name || '',
            email: n.data![0].email || '',
            profileTitle: n.data![0].profileTitle || '',
            profileDescription: n.data![0].profileDescription || '',
            location: n.data![0].location || '',
            role: n.data![0].role || 1
          })
        })
    )
  }, [])

  return (
    <Layout>
      <div className='flex flex-col flex-1 w-full bg-white'>
        <div className='flex flex-col h-full gap-4'>
          <div className='flex max-w-[840px] w-full py-3 mx-auto gap-4'>
            <Card className='flex flex-col w-full p-8 border border-gray-300 rounded-lg'>
              <div className='flex items-center mb-4'>
                <div className='flex-grow'>
                  <CardTitle className='mb-4'>Mi foto</CardTitle>
                  <CardContent>
                    <Avatar className='size-24'>
                      <AvatarImage
                        src={user?.imageUrl || '/img/foto-perfil.png'}
                        alt='foto-perfil'
                      />
                      <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                  </CardContent>
                </div>
                <a className='flex items-center self-start'>
                  <EditIcon />
                </a>
              </div>

              <div className='mb-4'>
                <CardTitle className='mb-4'>Tipo de cuenta</CardTitle>
                <CardContent className='flex items-center '>
                  <div className='flex gap-4 '>
                    <span className='text-lg'>
                      {!volunteerFeatures ? 'Usuario' : 'Voluntario'}
                    </span>
                    <Switch
                      className='data-[state=checked]:bg-yellow-300'
                      defaultChecked={user?.role === 2}
                      checked={volunteerFeatures}
                      onCheckedChange={() => {
                        setFormData({
                          ...formData,
                          role: volunteerFeatures ? 1 : 2
                        })
                        setVolunteerFeatures(!volunteerFeatures)
                      }}
                    />
                  </div>
                </CardContent>
              </div>
              <div className='flex flex-1 w-full gap-4'>
                <div className='flex flex-col flex-1'>
                  <div className='mb-4'>
                    <CardTitle>Identidad</CardTitle>
                    <CardContent className='flex flex-col gap-4 px-0 py-4'>
                      <InputWithLabel
                        id='Nombre'
                        name='name'
                        label='Nombre'
                        onChange={handleChange}
                        placeholder='John'
                        value={formData.name}
                        type='text'
                      />
                    </CardContent>
                  </div>

                  <div className='mb-4'>
                    <CardTitle>Email</CardTitle>
                    <CardContent className='flex flex-col gap-4 px-0 py-4'>
                      <InputWithLabel
                        id='Email'
                        name='email'
                        value={user?.email || ''}
                        onChange={handleChange}
                        label='Email'
                        placeholder='user@email.com'
                        type='text'
                      />
                    </CardContent>
                  </div>

                  <div className='mb-4'>
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
                  </div>
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='mb-4'>
                    <CardTitle>Actividad a realizar</CardTitle>
                    <CardContent className='flex flex-col gap-4 px-0 py-4'>
                      <InputWithLabel
                        id='Activida'
                        name='profileTitle'
                        label='Actividad'
                        onChange={handleChange}
                        placeholder='Cuidado a personas mayores, hacer la compra, etc.'
                        value={formData?.profileTitle || ''}
                        disabled={!volunteerFeatures}
                        type='text'
                      />
                    </CardContent>
                  </div>

                  <div className='mb-4'>
                    <CardTitle>Descripción de la actividad</CardTitle>
                    <CardContent className='flex flex-col gap-4 px-0 py-4'>
                      <InputWithLabel
                        id='Descripción de la actividad'
                        name='profileDescription'
                        value={formData?.profileDescription || ''}
                        label='Descripción de la actividad'
                        onChange={handleChange}
                        placeholder='Ayudo a todo el mundo que lo necesite.'
                        disabled={!volunteerFeatures}
                        type='text'
                      />
                    </CardContent>
                  </div>

                  <div className='mb-4'>
                    <CardTitle>Ubicación</CardTitle>
                    <CardContent className='flex flex-col gap-4 px-0 py-4'>
                      <InputWithLabel
                        id='location'
                        name='location'
                        onChange={handleChange}
                        label='location'
                        value={formData?.location || ''}
                        placeholder='Madrid,barcelona,etc.'
                        disabled={!volunteerFeatures}
                        type='text'
                      />
                    </CardContent>
                  </div>
                </div>
              </div>

              <Button onClick={handleSubmit}>Guardar cambios</Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
