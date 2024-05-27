import { FormEvent } from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout/Layout'

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted')
  }
  return (
    <Layout>
      <div className='flex flex-col w-full gap-3 p-8 m-auto bg-white border border-gray-300 rounded-md md:w-1/2'>
        <h1 className='text-4xl font-bold'>Contacto</h1>
        <div className='flex flex-row '>
          <form onSubmit={handleSubmit} className='flex flex-col w-full gap-3'>
            <Input label='Nombre' htmlName='name' required />
            <Input label='Email' htmlName='email' type='email' required />
            <Input label='Asunto' htmlName='subject' required />
            <Input label='Teléfono' htmlName='tel' />
            <Input label='Mensaje' htmlName='message' textarea required />
            <button className='px-4 py-2 text-white rounded-lg bg-slate-950'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
