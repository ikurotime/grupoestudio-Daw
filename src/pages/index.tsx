import Layout from '../components/Layout/Layout'
import logo from '../img/logolong.png';
import photo1 from '../img/volunteers.png';
import photo2 from '../img/volunteer-blue.png';

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
  

  <div className='flex flex-col'>

   <div className='flex flex-row p-10 pt-20 items-top'>
    <div className='p-2 pr-10 pm-4 flex'>
      <h1 className='font-bold text-3xl'>Donde las personas pueden encontrar el soporte que necesitan</h1>
    </div>
    <div className='p-2 flex justify-end '>
      <img src={photo1} className=" rounded-md w-[40rem]" alt="photo1" />
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
       <p className='text-sm pr-32 mb-4'>
      'Descubre el impacto de la solidaridad: Únete a Kindlink y sé parte de algo más grande. Regístrate ahora para transformar tu deseo de ayudar en acciones concretas. </p>
       <p className=' text-sm pr-32 mb-4'>
      En nuestra comunidad, construimos conexiones significativas. Tú puedes ser el enlace que marca la diferencia. Este no es solo un registro, es la oportunidad de ser el cambio que el mundo necesita.</p>
       <p className='text-sm pr-32 mb-8'>
       ¿Preparado para formar parte de esta cadena de bondad? Inscríbete hoy y experimenta la gratificación de hacer el bien, sin importar cuán pequeño sea tu aporte. Te damos la bienvenida con los brazos abiertos.'
       </p>
       <button className='mr-[300px] p-2 rounded-md bg-blue-800 text-sm text-white'>Empieza a colaborar con nosotros</button>
      </div>
      <img src={photo2} className="rounded-md w-[14rem] mr-4" alt="photo2" />
    </div>
   </div>
  </div>
</div>
  
  </Layout>
}
