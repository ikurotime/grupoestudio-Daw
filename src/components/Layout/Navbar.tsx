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
          className='float-left w-24 sm:w-32 md:w-40'
          alt='foto-logo'
        />
      </a>
      <div className='flex items-center justify-end gap-10'>
        <a href='/contacto'>
          <p className='text-sm '>Contacto</p>
        </a>
        <div>
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
              <button className='p-2 mr-4 text-xs bg-yellow-400 rounded-md sm:mr-8'>
                Crea tu cuenta
              </button>
              <button className='p-1 text-xs underline rounded-md'>
                Conectarse
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
