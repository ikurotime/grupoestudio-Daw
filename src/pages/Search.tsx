import Layout from '../components/Layout/Layout'
import SearchBar from '@/components/SearchBar'
import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { Tables } from 'database.types'

const VOLUNTEER_ID = 2
export default function Search() {
  const [volunteerList, setVolunteerList] = useState<Tables<'User'>[]>([])
  useEffect(() => {
    const getVolunteers = async () => {
      const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('role', VOLUNTEER_ID)
      if (error) {
        console.error(error)
      }
      if (data) {
        setVolunteerList(data)
      }
    }
    getVolunteers()
  }, [])

  return (
    <Layout>
      <SearchBar />
      {volunteerList ? (
        <div className='flex flex-col items-center gap-4'>
          {volunteerList.map((volunteer) => (
            <div
              key={volunteer.id}
              className='flex flex-col items-center gap-4'
            >
              <img
                src={volunteer.imageUrl ?? ''}
                alt='foto-perfil'
                className='w-24 h-24 rounded-full'
              />
              <h2 className='text-xl font-bold'>{volunteer.name}</h2>
              <p>{volunteer.profileDescription}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay voluntarios disponibles</p>
      )}
    </Layout>
  )
}
