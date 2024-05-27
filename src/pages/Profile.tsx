import { useEffect, useState } from 'react'

import { ContactDialog } from '@/components/ContactDialog'
import Layout from '../components/Layout/Layout'
import StarRating from '@/components/StarRating'
import { Tables } from 'database.types'
import { supabase } from '@/supabaseClient'
import { useLocation } from 'wouter'

export default function Profile() {
  const [profile, setProfile] = useState<Tables<'User'> | null>(null)

  const [location] = useLocation()
  const pathname = location.split('/').pop() || ''

  useEffect(() => {
    const getProfile = async () => {
      supabase
        .from('User')
        .select('*')
        .eq('id', pathname)
        .then(({ data }) => {
          setProfile(data![0])
        })
    }

    getProfile()
  }, [pathname])
  return (
    <Layout>
      <div className='flex flex-col flex-1 w-full bg-white'>
        {profile ? (
          <div className='flex justify-center w-full h-full gap-4 p-8'>
            <div className='flex justify-center w-full gap-8 max-h-80'>
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
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Layout>
  )
}
