import MessageIcon from '../Icons/Message'
import ProfileOutlinedIcon from '../Icons/ProfileOutlined'

interface NavbarProps {
  isLogged?: boolean
}
export default function Navbar({ isLogged = false }: NavbarProps) {
  return (
    <div className='p-4 mx-0 bg-white rounded-md shadow-md '>
      <a href='/'>
        <img
          src='/img/logolong.png'
          className='float-left w-[8rem]'
          alt='foto-logo'
        />
      </a>

      {isLogged ? (
        <div className='flex justify-end'>
          <button className='mr-2'>
            <MessageIcon />
          </button>
          <button className='ml-2'>
            <ProfileOutlinedIcon />
          </button>
        </div>
      ) : (
        <div className='flex justify-end'>
          <button className='p-2 mr-8 text-xs text-white bg-yellow-400 rounded-md'>
            Crea tu cuenta
          </button>
          <button className='p-1 mr-6 text-xs underline rounded-md'>
            Conectarse
          </button>
        </div>
      )}
    </div>
  )
}
