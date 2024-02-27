import Layout from '../components/Layout/Layout'
import logo from '../img/logolong.png';
import photo1 from '../img/volunteers.png';
import photo2 from '../img/volunteer-blue.png';
import photo3 from '../img/volunteer.jpg';
import vector2 from '../img/vector2.png';
import logo2 from '../img/logosmall.png';

export default function Index() {
  return <Layout>

<div className='w-full'>
  <div className='p-4 shadow-md rounded-md'>
    <img src={logo} className="float-left w-[8rem]" alt="photo-logo" />
    <div className='flex justify-end'>
      <button className='mr-8 p-2 rounded-md bg-yellow-400 text-xs text-white'>Crea tu cuenta</button>
      <button className='p-1 mr-6 rounded-md underline text-xs'>Conectarse</button>
    </div>
  </div>

  <div className= 'px-16'>
  

  <div className='flex flex-col'>

   <div className='flex flex-row pt-20 pb-8'>
    <div className='p-2 pm-4'>
      <h1 className='font-bold text-3xl pt-4 pl-10 '>Donde las personas <br/>pueden encontrar el soporte<br/> que necesitan</h1>
    </div>
    <div className='flex justify-end '>
      <img src={photo1} className="rounded-md max-w-[128rem] w-full lg:w-auto xl:max-w-[28rem] pl-20" alt="photo1" />
    </div>
  </div>


    <div className='h-28 p-4 shadow-lg rounded-lg flex items-center'>
     <input className='border-2 rounded-md border-grey bg-transparent p-2 mr-4 ' placeholder="''Ayuda con mudanza'', ''Comp.."/>
     <input className=' border-2 rounded-md border-grey bg-transparent p-2 mr-4' placeholder="''Madrid', ''Vigo''" /> 
      <div className='flex justify-between items-center ml-auto'>
        <button className='mr-8 p-2 rounded-md bg-yellow-400 text-xs text-white'>Encontrar personas</button>
        <p className='mr-8 p-2 text-xs'> o </p>
        <button className='p-1 mr-8 rounded-md underline text-xs'>Explorar</button>
      </div>
    </div>

    
    <div className='flex flex-col p-10 pt-20 items-center'>
     <h1 className='font-bold text-2xl mb-4'>Una nueva forma de solidaridad</h1>
    <div className='flex flex-row items-center'>
    <div className='flex flex-col '>
       <h2 className='font-bold text-xl mb-4'>Servicios parea los que más lo necesitan</h2>
       <p className='text-xs pr-32 mb-4'>
        'Descubre el impacto de la solidaridad: Únete a Kindlink y sé parte de algo más grande. Regístrate ahora para transformar tu deseo de ayudar en acciones concretas. </p>
       <p className=' text-xs pr-32 mb-4'>
         En nuestra comunidad, construimos conexiones significativas. Tú puedes ser el enlace que marca la diferencia. Este no es solo un registro, es la oportunidad de ser el cambio que el mundo necesita.</p>
       <p className='text-xs pr-32 mb-8'>
         ¿Preparado para formar parte de esta cadena de bondad? Inscríbete hoy y experimenta la gratificación de hacer el bien, sin importar cuán pequeño sea tu aporte. Te damos la bienvenida con los brazos abiertos.'
       </p>
       <button className='mr-[300px] p-2 rounded-md bg-blue-800 text-xs text-white'>Empieza a colaborar con nosotros</button>
      </div>
      <img src={photo2} className="rounded-md w-[14rem] mr-4" alt="photo2" />
    </div>

    <div className='flex flex-row items-center pt-16 pb-16'>
     <img src={photo3} className="rounded-md w-[23rem] mr-16" alt="photo3" />
      <div className='flex flex-col '>
       <h2 className='font-bold text-xl mb-4 mt-4'>Busca. Encuentra. Recibe ayuda</h2>
        <p className='text-xs mb-4'>
         En Kindlink, te ofrecemos un espacio donde tus necesidades no pasan desapercibidas. Busca la ayuda que necesitas y encuentra apoyo real. Regístrate ahora para conectarte con almas generosas listas para ofrecer una mano amiga.</p>
        <p className=' text-xs mb-4'>
         No se trata solo de buscar, sino de descubrir una red de solidaridad que está aquí para ti. Este no es solo un registro, es el primer paso para recibir el respaldo que mereces</p>
        <p className='text-xs mb-8'>
         ¿Listo para encontrar la ayuda que necesitas? Regístrate hoy y descubre el poder de la comunidad solidaria que se preocupa por ti. Estamos aquí para tender puentes hacia un mañana mejor. 
       </p>
       <button className='mr-[80px] mb-4 p-2 rounded-md bg-blue-800 text-xs text-white'>Encuentra la opción perfecta</button>
      </div>
    </div>

        <div className='flex flex-row relative w-full items-center justify-center h-[350px]'>
        <div className='flex flex-col '>
         <h1 className='pt-16 text-center text-3xl z-10 mx-auto px-16 pb-8 text-white'> Únete a la plataforma solidaria < br/> de más rápido crecimiento</h1>
         
          <button className=' items-center justify-center mb-4 p-2 px-16 z-10 mx-auto rounded-md bg-white text-xs text-black'>Empezar ahora</button>
          </div> 
          <div className="absolute inset-0 flex items-center justify-center ">
           <img src={vector2} className="h-full object-cover" alt="vector2" />
          </div>
          
        </div>

       

   </div>
  </div>
  </div>
  <div className='w-full'>
          <div className='pt-8'>
            <img src={logo2} className="float-left w-[11rem]" alt="photo-logo2" /> 
         </div>
      </div>
</div>
  
  </Layout>
}
