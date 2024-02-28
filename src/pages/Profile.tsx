import Layout from '../components/Layout/Layout'
import perfil from '../imagenes/perfil.jpg' 
import logolong from '../imagenes/logolong.png' 
import escribiendo from '../imagenes/escribiendo.png' 
import usuario from '../imagenes/usuario.png' 

export default function Profile() {
  return <Layout>

    <div className=' w-full '>
        
          <div className='p-4 shadow-md rounded-md mx-0 ' >
           <img src={logolong} className='float-left w-[8rem]' alt='foto-logo'/>
          
               <div className='flex justify-end'>
                  <img src={escribiendo} className='w-6 h-6 mr-2' alt='foto-mensaje' />
                  <img src={usuario} className='w-6 h-6 mr-2' alt='foto-usuario' />
                </div>
           </div>
        
        <div className=' grid grid-cols-2'>

          <div className=' grid grid-cols-2'>

          <div className='relative p-4 shadow-md rounded-md mx-0 w-32 shrink h-full'>
        
        <div className='flex flex-col'>
    
            <button className='text-left'> Ajustes</button>
            <button className='text-left'>Mensajes</button>
            <button className='text-left'>Cerrar sesión</button>
      
        <div className='absolute top-0 right-0 h-full border-l border-gray-400'></div>
      
         </div>
    
    </div>

          <div className='mt-10 border border-gray-400 rounded-lg p-4 flex flex-col h-32 w-52 ml-0 col-span-1 shrink '>

              <button className='text-left'>Identidad</button>
              <button className='text-left'>Email</button>
              <button className='text-left'>Teléfono</button>
              <button className='text-left'>Contraseña</button>

              </div>

             
          </div>
          
            
            <div className=''>

              <div className='mt-10 border border-gray-400 rounded-lg h-100 w-full p-4 mb-6 '>
              <h2 className='mb-4'>Mi foto</h2>
               <img src={perfil} className='rounded-full w-24 h-24' alt='foto-perfil'/> 
              </div>

              <div className='border border-gray-400 rounded-lg h-40 w-full  p-4 '>
              <h3>Identidad</h3>
                <p>Nombre</p>
                <div className=' w-96 h-7 bg-gray-300 opacity-20'>Yolanda</div>
                
                <p>Apellidos</p>
                <div className='w-96 h-7 bg-gray-300 opacity-20'>García</div>
              </div>
             
            </div>
            
            </div>
        </div>  
        

  </Layout>

  
}
