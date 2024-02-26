import Layout from '../components/Layout/Layout'
import logo from '../img/logolong.png';
import photo1 from '../img/volunteer.jpg';

export default function Index() {
  return <Layout>

<div className='w-full'>
  <div className='p-4 shadow-md rounded-md'>
    <img src={logo} className="float-left w-[8rem]" alt="photo-logo" />
    <div className='flex justify-end'>
      <button className='mr-4 p-1 rounded-md bg-yellow-400 text-sm'>Crea tu cuenta</button>
      <button className='p-1 rounded-md underline text-sm'>Conectarse</button>
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
     <input className='border-2 rounded-md border-grey bg-transparent p-2'/>
     <input className=' border-2 rounded-md border-grey bg-transparent p-2' /> 
      <div className='flex justify-between items-center ml-auto'>
        <button className='mr-4 p-1 rounded-md bg-yellow-400 text-sm'>Encontrar personas</button>
        <button className='p-1 rounded-md underline text-sm'>Explorar</button>
      </div>
    </div>
  </div>
</div>
  
  </Layout>
}
