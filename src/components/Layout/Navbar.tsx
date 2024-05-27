import { Card, CardContent } from '../ui/card'

import { Button } from '../ui/button'
import { DropDown } from '../DropDown'
import MessageIcon from '../Icons/Message'
import { Session } from '@supabase/supabase-js'
import { useLocation } from 'wouter'

export default function Navbar({
  session
}: {
  session: Session | null | undefined
}) {
  const [, setLocation] = useLocation()

  return (
    <Card>
      <CardContent className='flex items-center justify-between p-4'>
        <img
          onClick={() => setLocation('/')}
          src='/img/logolong.png'
          className='float-left w-24 sm:w-32 md:w-40'
          alt='foto-logo'
        />
        <div className='flex items-center justify-end gap-10'>
          <a href='/search'>
            <p className='text-base'>Buscar perfiles</p>
          </a>
          <a href='/contacto'>
            <p className='text-base'>Contacto</p>
          </a>
          <div>
            {session ? (
              <div className='flex justify-end gap-4'>
                <Button
                  variant='outline'
                  onClick={() => setLocation('/messages')}
                >
                  <MessageIcon />
                </Button>
                <DropDown />
              </div>
            ) : (
              <div className='flex justify-end gap-2'>
                <Button onClick={() => setLocation('/signin')}>
                  Crea tu cuenta
                </Button>
                <Button
                  onClick={() => setLocation('/signin')}
                  variant='outline'
                >
                  Conectarse
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
