import MessageIcon from '../Icons/Message'
import ProfileOutlinedIcon from '../Icons/ProfileOutlined'

export default function Navbar() {
  return (
    <div className='p-4 mx-0 bg-white rounded-md shadow-md '>
      <a href='/'>
        <img
          src='/img/logolong.png'
          className='float-left w-[8rem]'
          alt='foto-logo'
        />
      </a>

      <div className='flex justify-end'>
        <button className='mr-2'>
          <MessageIcon />
        </button>
        <button className='ml-2'>
          <ProfileOutlinedIcon />
        </button>
      </div>
    </div>
  )
}
