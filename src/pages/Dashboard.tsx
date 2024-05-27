import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

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
    const { error } = await supabase
      .from('User')
      .update(formData)
      .eq('id', user?.id)
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
          <div className='flex max-w-[640px] py-3 mx-auto gap-4'>
            <Card className='flex items-center w-full p-4 border border-gray-300 rounded-lg 6 '>
              <div className='flex-grow'>
                <CardTitle className='mb-4'>Mi foto</CardTitle>
                <CardContent>
                  <img
                    src={user?.imageUrl || '/img/foto-perfil.png'}
                    className='w-24 h-24 rounded-full'
                    alt='foto-perfil'
                  />
                </CardContent>
              </div>
              <a className='flex items-center self-start'>
                <EditIcon />
              </a>
            </Card>
            <Card className='flex items-center flex-1 w-full p-4 border border-gray-300 rounded-lg'>
              <div className='flex-grow'>
                <CardTitle className='mb-4'>Tipo de cuenta</CardTitle>
                <CardContent>
                  <span className='text-lg'>
                    {user?.role === 1 ? 'Usuario' : 'Voluntario'}
                  </span>
                  <Switch
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
                </CardContent>
              </div>
            </Card>
            <Card className='flex items-center flex-1 w-full p-4 border border-gray-300 rounded-lg'>
              <Button onClick={handleSubmit}>Guardar cambios</Button>
            </Card>
          </div>
          <div className='flex max-w-[640px] py-3 mx-auto gap-4'>
            <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
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
            </Card>

            <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
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
            </Card>

            <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
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
          </div>
          {volunteerFeatures ? (
            <div className='flex   max-w-[640px] py-3 mx-auto gap-4'>
              <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
                <CardTitle>Actividad a realizar</CardTitle>
                <CardContent className='flex flex-col gap-4 px-0 py-4'>
                  <InputWithLabel
                    id='Activida'
                    name='profileTitle'
                    label='Actividad'
                    onChange={handleChange}
                    placeholder='Cuidado a personas mayores, hacer la compra, etc.'
                    value={formData?.profileTitle || ''}
                    type='text'
                  />
                </CardContent>
              </Card>

              <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
                <CardTitle>Descripción de la actividad</CardTitle>
                <CardContent className='flex flex-col gap-4 px-0 py-4'>
                  <InputWithLabel
                    id='Descripción de la actividad'
                    name='profileDescription'
                    value={formData?.profileDescription || ''}
                    label='Descripción de la actividad'
                    onChange={handleChange}
                    placeholder='Ayudo a todo el mundo que lo necesite.'
                    type='text'
                  />
                </CardContent>
              </Card>

              <Card className='flex flex-col w-full p-4 border border-gray-300 rounded-lg '>
                <CardTitle>Ubicación</CardTitle>
                <CardContent className='flex flex-col gap-4 px-0 py-4'>
                  <InputWithLabel
                    id='location'
                    name='location'
                    onChange={handleChange}
                    label='location'
                    value={formData?.location || ''}
                    placeholder='Madrid,barcelona,etc.'
                    type='text'
                  />
                </CardContent>
              </Card>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}
