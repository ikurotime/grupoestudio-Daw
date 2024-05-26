import Layout from '../components/Layout/Layout'
import SearchBar from '@/components/SearchBar'
import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { Tables } from 'database.types'

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
          <SearchBar onClick={handleSearch} />
          <div className='flex justify-between gap-3'>
            <div className='flex flex-1 p-8 bg-white border rounded-md shadow-md '>
              <span className='text-2xl'>Filtros</span>
            </div>
            {volunteerList ? (
              <div className='grid grid-cols-1 gap-4 p-4 place-items-center sm:grid-cols-2 lg:grid-cols-3'>
                {volunteerList.map((volunteer) => (
                  <div
                    key={volunteer.id}
                    className='flex flex-col items-start bg-white border rounded-md shadow-md w-fit min-w-80'
                  >
                    <div className='relative w-full'>
                      <img
                        src={volunteer.imageUrl ?? ''}
                        alt='foto-perfil'
                        className='object-cover object-bottom w-full size-64'
                      />
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
                        <div className='flex gap-1'>
                          {[...Array(volunteer.rating)].map((_, index) => (
                            <span key={index} className='text-yellow-400'>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className='px-2 text-blue-400 rounded-md w-fit bg-blue-50'>
                        {volunteer.Language.title}
                      </span>
                    </div>
                  </div>
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
