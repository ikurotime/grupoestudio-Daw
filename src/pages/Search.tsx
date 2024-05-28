import { useEffect, useState } from 'react'

import Layout from '../components/Layout/Layout'
import SearchBar from '@/components/SearchBar'
import StarRating from '@/components/StarRating'
import { Tables } from 'database.types'
import { supabase } from '@/supabaseClient'
import { useLocation } from 'wouter'

const VOLUNTEER_ID = 2
type Volunteer = Tables<'User'> & { Language: Tables<'Language'> }
export default function Search() {
  const [, setLocation] = useLocation()
  supabase.auth.getUser().then((data) => {
    if (data.data.user === null) {
      setLocation('/')
    }
  })
  const [volunteerList, setVolunteerList] = useState<Volunteer[]>([])
  const [rating, setRating] = useState<string[]>(['1', '2', '3', '4', '5'])
  const [formData, setFormData] = useState({
    search: '',
    location: ''
  })
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([
    '1',
    '2',
    '3',
    '4',
    '5'
  ])
  useEffect(() => {
    const getVolunteers = async () => {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData) return
      const { data, error } = await supabase
        .from('User')
        .select('*, Language(*)')
        .eq('role', VOLUNTEER_ID)
        .not('id', 'eq', userData?.user?.id)
      if (error) {
        console.error(error)
      }
      if (data) {
        //console.log(data)
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
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setSelectedLanguage(['1', '2', '3', '4', '5'])
      return
    }
    setSelectedLanguage([e.target.value])
  }
  const handleRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setRating(['1', '2', '3', '4', '5'])
      return
    }
    setRating([e.target.value])
  }
  const handleSearch = async ({
    formData
  }: {
    formData: { search: string; location: string }
  }) => {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData) return
    setFormData(formData)
    const { data, error } = await supabase
      .from('User')
      .select('*, Language(*)')
      .eq('role', VOLUNTEER_ID)
      .ilike('profileTitle', `%${formData.search}%`)
      .ilike('location', `%${formData.location}%`)
      .in('languageId', selectedLanguage)
      .in('rating', rating)
      .not('id', 'eq', userData?.user?.id)
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
  useEffect(() => {
    handleSearch({ formData })
  }, [selectedLanguage, rating])
  return (
    <Layout>
      <div className='flex flex-1 items-center justify-center bg-[#F5F5F5] '>
        <div className='max-w-[1440px] flex w-full flex-col gap-2 h-full'>
          <div className='flex items-center justify-between w-full p-5 text-xl bg-yellow-200 rounded-lg'>
            <h1>¿Quieres ser un voluntario?</h1>
            <a
              href='/dashboard'
              className='px-4 py-2 text-base text-white rounded-lg bg-primary'
            >
              Conviértete en uno
            </a>
          </div>
          <SearchBar onClick={handleSearch} />
          <div className='flex justify-between gap-3'>
            <div className='flex flex-col flex-1 gap-4 p-8 bg-white border rounded-md shadow-md h-fit '>
              <span className='text-2xl'>Filtros</span>
              <div>
                <span>Idioma</span>
                <select
                  name='languageId'
                  data-testid='language'
                  className='w-full p-2 border rounded-md'
                  onChange={handleSelect}
                >
                  <option value='all'>Todos</option>
                  <option value='1'>Español</option>
                  <option value='2'>Ingles</option>
                  <option value='3'>Catalán</option>
                  <option value='4'>Gallego</option>
                  <option value='5'>Euskera</option>
                </select>
              </div>
              <div>
                <span>Valoración</span>
                <select
                  name='rating'
                  data-testid='rating'
                  className='w-full p-2 border rounded-md'
                  onChange={handleRating}
                >
                  <option value='all'>Todos</option>
                  <option value='5'>5 Estrellas</option>
                  <option value='4'>4 Estrellas</option>
                  <option value='3'>3 Estrellas</option>
                  <option value='2'>2 Estrellas</option>
                  <option value='1'>1 Estrella</option>
                </select>
              </div>
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
