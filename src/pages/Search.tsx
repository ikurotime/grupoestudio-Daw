import { useEffect, useState } from 'react'

import Layout from '../components/Layout/Layout'
import SearchBar from '@/components/SearchBar'
import StarRating from '@/components/StarRating'
import { Tables } from 'database.types'
import { supabase } from '@/supabaseClient'

const VOLUNTEER_ID = 2
type Volunteer = Tables<'User'> & { Language: Tables<'Language'> }

export default function Search() {
  const [volunteerList, setVolunteerList] = useState<Volunteer[]>([])
  useEffect(() => {
    const getVolunteers = async () => {
      const { data, error } = await supabase
        .from('User')
        .select('*, Language(*)')
        .eq('role', VOLUNTEER_ID)
      if (error) {
        console.error(error)
      }
      if (data) {
        console.log(data)
        setVolunteerList(
          data.map((volunteer) => ({
            ...volunteer,
            Language: volunteer.Language ?? { id: 0, title: null }
          }))
        )
      }
    }
    getVolunteers()
  }, [])
  const handleSearch = async ({
    formData
  }: {
    formData: { search: string; location: string }
  }) => {
    const { data, error } = await supabase
      .from('User')
      .select('*, Language(*)')
      .eq('role', VOLUNTEER_ID)
      .ilike('profileTitle', `%${formData.search}%`)
      .ilike('location', `%${formData.location}%`)
    if (error) {
      console.error(error)
    }
    if (data) {
      setVolunteerList(
        data.map((volunteer) => ({
          ...volunteer,
          Language: volunteer.Language ?? { id: 0, title: null }
        }))
      )
    }
  }
  return (
    <Layout>
      <div className='flex flex-1 items-center justify-center bg-[#F5F5F5] '>
        <div className='max-w-[1440px] flex w-full flex-col gap-2 h-full'>
          <div className='flex items-center justify-between w-full p-5 text-xl bg-yellow-200 rounded-lg'>
            ¿Quieres ser un voluntario?{' '}
            <a
              href='/dashboard'
              className='px-4 py-2 text-white bg-black rounded-lg'
            >
              Conviértete en uno
            </a>
          </div>
          <SearchBar onClick={handleSearch} />
          <div className='flex justify-between gap-3'>
            <div className='flex flex-1 p-8 bg-white border rounded-md shadow-md '>
              <span className='text-2xl'>Filtros</span>
            </div>
            {volunteerList ? (
              <div className='grid grid-cols-1 gap-4 p-4 place-items-center sm:grid-cols-2 lg:grid-cols-3'>
                {volunteerList.map((volunteer) => (
                  <a
                    href={`/search/profile/${volunteer.id}`}
                    key={volunteer.id}
                    className='flex flex-col items-start bg-white border rounded-md shadow-md w-fit min-w-80 max-w-80'
                  >
                    <div className='relative flex w-full '>
                      <img
                        src={volunteer.imageUrl ?? ''}
                        alt='foto-perfil'
                        className='flex object-cover w-full aspect-square'
                      />
                      <div className='absolute w-full h-full bg-gradient-to-tr from-black/50 to-transparent' />
                      <div className='absolute bottom-0 z-10 p-4'>
                        <h2 className='text-xl font-bold text-white '>
                          {volunteer.name}
                        </h2>
                        <span className='text-base font-bold text-white '>
                          {volunteer.location}
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-4 p-5'>
                      <div>
                        <span className='text-xl font-semibold'>
                          {volunteer.profileTitle}
                        </span>
                        <StarRating rating={volunteer.rating || 0} />
                      </div>
                      <span className='px-2 text-blue-400 rounded-md w-fit bg-blue-50'>
                        {volunteer.Language.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p>No hay voluntarios disponibles</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
