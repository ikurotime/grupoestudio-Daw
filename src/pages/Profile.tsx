import Layout from '../components/Layout/Layout'
import perfil from '../imagenes/perfil.jpg' 
import logolong from '../imagenes/logolong.png' 
import escribiendo from '../imagenes/escribiendo.png' 


export default function Profile() {

  function IconoMunecoComponent(){
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    );
  }

  function IconoMensajeComponent(){

    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g clipPath="url(#clip0_220_6177)">
        <path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" fill="url(#pattern0)" stroke="black" strokeWidth="1.5"/>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_220_6177" transform="matrix(0.025 0 0 0.0251527 0 -0.00305495)"/>
        </pattern>
        <clipPath id="clip0_220_6177">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
        <image id="image0_220_6177" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEtSURBVHgB7ZjdbcIwFIVPUAdgBHcDRggTtBtU3aAbNBu0GyAmQExANsEbwAZwHTvCDuZHusK+D/eTDjEPiC/35iWnwTVtSA36kCwtZU85Vc4emQG1AsSmcU5ogqCzNuF8pKzDtSRzykfkYSnv7tAiHa9BPQzlgGiKM6T73sKb18LCb29kEIwpvdYcicMMwlFBLirIRQW5qCAXFeSiglxUkIsKclFBLhIF5/EXaYIG/t14pH977nfDXS3w2s7G/ccXLhO0eFLwk7LCZPQF+HYfj1bs5DYoK2cpS4SW694EDfzkRkp0Nj0m9dstQUPZIX0elqhQi9xa8R/StquKnCMn+Av/7I38oG6hhA5p/RaXiB0E0CHfcG4gBLfOXE9sIIh/CJVrovMiXC1kFJkDZ14XhldYN4evAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>
      
    );
  }

  function IconoAjustesComponent(){
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    );
  }

  function IconoSesionComponent(){
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    );
  }

  function IconoPerfilComponent(){
    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    );
  }

  function IconoEditarComponent(){
    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H12H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2217 5.8284L15.0502 2.99997L19.9999 7.94972L17.1715 10.7781M12.2217 5.8284L6.61516 11.435C6.42763 11.6225 6.32227 11.8769 6.32227 12.1421V16.6776H10.8578C11.123 16.6776 11.3773 16.5723 11.5649 16.3847L17.1715 10.7781M12.2217 5.8284L17.1715 10.7781" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    );
  }


  return <Layout>

    <div className=' w-full '>
        
          <div className='p-4 shadow-md rounded-md mx-0 ' >
           <img src={logolong} className='float-left w-[8rem]' alt='foto-logo'/>
          
               <div className='flex justify-end'>

                  <button className='mr-2'><IconoMensajeComponent/></button>
                  <button className='ml-2'><IconoMunecoComponent/></button>

                </div>
           </div>
        
        <div className=' grid grid-cols-2'>

          <div className=' grid grid-cols-2'>

          <div className='relative p-4 shadow-md rounded-md mx-0 w-40 shrink h-full'>
        
              <div className='flex flex-col'>
    
                <button className='flex items-center text-left mb-2'> 
                  <div className="mr-2"><IconoAjustesComponent/></div>
                  Ajustes</button>
                <button className='flex items-center text-left mb-2'>
                  <div className="mr-2"><IconoMensajeComponent/></div>
                  Mensajes
                </button>
                <button className='flex items-center text-left mb-2'>
                  <div className="mr-2"><IconoSesionComponent/></div>
                  Cerrar sesión
                </button>
      
                <div className='absolute top-0 right-0 h-full border-l border-gray-400'></div>
      
              </div>
    
          </div>

              <div className='mt-10 border border-gray-400 rounded-lg p-4 flex flex-col h-40 w-52 ml-0 col-span-1 shrink '>

              <button className='flex items-center text-left mb-2'>
                <div className='mr-2'><IconoPerfilComponent /></div>
                Identidad
                </button>
              <button className='flex items-center text-left mb-2'>
              <div className='mr-2'><IconoPerfilComponent/></div>
                Email
              </button>
              <button className='flex items-center text-left mb-2'>
              <div className='mr-2'><IconoPerfilComponent/></div>
                Teléfono
              </button>
              <button className='flex items-center text-left'>
              <div className='mr-2'><IconoPerfilComponent/></div>
                Contraseña
              </button>

              </div>

             
          </div>
          
            
            <div className=''>

              <div className='mt-10 border border-gray-400 rounded-lg w-full p-4 mb-6 flex items-center '>
                <div className='flex-grow'>
                  <h2 className='mb-4'>Mi foto <button>  </button></h2>
                  <img src={perfil} className='rounded-full w-24 h-24' alt='foto-perfil'/> 
                </div>
                <button className='flex items-center self-start'> <IconoEditarComponent/> </button>
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
