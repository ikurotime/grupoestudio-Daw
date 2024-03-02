import EditIcon from '../components/Icons/Edit'
import ProfileIcon from '../components/Icons/Profile'
import SettingsIcon from '../components/Icons/Settings'
import Layout from '../components/Layout/Layout'
//import escribiendo from '../imagenes/escribiendo.png'

export default function Dashboard() {
  const profileItems = ['Identidad', 'Email', 'Teléfono', 'Contraseña']
  const leftMenuItems = ['Ajustes', 'Mensajes', 'Cerrar sesión']
  return (
    <Layout>
      <div className='flex flex-col flex-1 w-full bg-white'>
        <div className='grid h-full grid-cols-2'>
          <div className='grid grid-cols-2 '>
            <div className='relative w-40 h-full p-4 mx-0 rounded-md shadow-md shrink'>
              <div className='flex flex-col'>
                {leftMenuItems.map((item, index) => (
                  <a key={index} className='flex items-center mb-2 text-left'>
                    <div className='mr-2'>
                      <SettingsIcon />
                    </div>
                    {item}
                  </a>
                ))}

                <div className='absolute top-0 right-0 h-full border-l border-gray-400'></div>
              </div>
            </div>

            <div className='flex flex-col h-40 col-span-1 p-4 mt-10 ml-0 border border-gray-400 rounded-lg w-52 shrink '>
              {profileItems.map((item, index) => (
                <a key={index} className='flex items-center mb-2 text-left'>
                  <div className='mr-2'>
                    <ProfileIcon />
                  </div>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className=''>
            <div className='flex items-center w-full p-4 mt-10 mb-6 border border-gray-400 rounded-lg '>
              <div className='flex-grow'>
                <h2 className='mb-4'>Mi foto</h2>
                <img
                  src='/img/perfil.png'
                  className='w-24 h-24 rounded-full'
                  alt='foto-perfil'
                />
              </div>
              <a className='flex items-center self-start'>
                <EditIcon />
              </a>
            </div>

            <div className='w-full h-40 p-4 border border-gray-400 rounded-lg '>
              <h3>Identidad</h3>
              <p>Nombre</p>
              <div className='bg-gray-300 w-96 h-7 opacity-20'>Yolanda</div>

              <p>Apellidos</p>
              <div className='bg-gray-300 w-96 h-7 opacity-20'>García</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
