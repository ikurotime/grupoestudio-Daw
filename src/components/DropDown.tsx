import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import ProfileOutlinedIcon from './Icons/ProfileOutlined'
import { supabase } from '@/supabaseClient'
import { useLocation } from 'wouter'

export function DropDown() {
  const [, setLocation] = useLocation()
  const handleLogout = () => {
    supabase.auth.signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>
          <ProfileOutlinedIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setLocation('/dashboard')}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
