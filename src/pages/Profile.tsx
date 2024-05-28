import { useEffect, useState } from 'react'

import { Card } from '@/components/ui/card'
import { ContactDialog } from '@/components/ContactDialog'
import Layout from '../components/Layout/Layout'
import StarRating from '@/components/StarRating'
import { Tables } from 'database.types'
import { supabase } from '@/supabaseClient'
import { useLocation } from 'wouter'

export default function Profile() {
  const [profile, setProfile] = useState<Tables<'User'> | null>(null)
  const [recommendation, setRecommendation] = useState<
    Tables<'Recommendation'>[]
  >([])
  const [location] = useLocation()
  const pathname = location.split('/').pop() || ''

  useEffect(() => {
    const getProfile = async () => {
      supabase
        .from('User')
        .select('*, Language(*)')
        .eq('id', pathname)
        .then(({ data }) => {
          setProfile(data![0])
        })
      supabase
        .from('Recommendation')
        .select('*, User!Recommendation_receiverId_fkey(*), userId(*)')
        .eq('receiverId', pathname)
        .then(({ data }) => {
          console.log(data)
          setRecommendation(data || [])
        })
    }

    getProfile()
  }, [pathname])
  return (
    <Layout>
      <div className='flex flex-col flex-1 w-full bg-white'>
        {profile ? (
          <div className='flex flex-col items-center justify-center w-full h-full gap-4 p-8'>
            <Card className='flex justify-center gap-8 p-5 max-h-80'>
              <img
                className='object-cover rounded-full size-64'
                src={profile.imageUrl || ''}
                alt=''
              />
              <div className='flex flex-col justify-center gap-4'>
                <div>
                  <h1 className='text-3xl font-semibold'>{profile.name}</h1>
                  <p className='text-lg'>{profile.location}</p>
                  <StarRating rating={profile.rating || 0} />
                </div>
                <ContactDialog
                  name={profile.name || ''}
                  receiverId={profile.id}
                />
              </div>
            </Card>
            <div className='flex gap-4'>
              <Card>
                <div className='flex flex-col gap-4 p-5'>
                  <div>
                    <h2 className='text-xl font-semibold'>
                      {profile.profileTitle}
                    </h2>
                    <p>{profile.profileDescription}</p>
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold'>Idiomas</h2>
                    <p>{profile.Language.title}</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className='flex flex-col gap-4 p-5'>
                  <h2 className='text-xl font-semibold'>Recomendaciones</h2>
                  {recommendation.map((n) => (
                    <Card key={n.id} className='flex flex-col gap-2 p-3'>
                      <p>{n.title}</p>
                      <p>{n.text}</p>
                      <p>- {n.userId.name}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full h-full'>
            Loading...
          </div>
        )}
      </div>
    </Layout>
  )
}
