import { useState } from 'react'
import { Button } from './ui/button'

export default function SearchBar({
  onClick
}: {
  onClick: ({
    formData
  }: {
    formData: { search: string; location: string }
  }) => void
}) {
  const [formData, setFormData] = useState({
    search: '',
    location: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onClick({ formData })
  }
  return (
    <form
      onSubmit={handleOnClick}
      className='flex flex-col items-center p-4 bg-white border rounded-lg min-h-28 sm:flex-row'
    >
      <input
        name='search'
        onChange={handleChange}
        className='flex-1 p-2 mr-2 text-base bg-transparent border-2 rounded-md border-grey sm:mr-4'
        placeholder="''Ayuda con mudanza'', ''Comp.."
      />
      <input
        name='location'
        onChange={handleChange}
        className='flex-1 p-2 mr-2 text-base bg-transparent border-2 rounded-md border-grey sm:mr-4'
        placeholder="''Madrid', ''Vigo''"
      />
      <div className='flex items-center justify-center gap-2 mt-4 sm:justify-between sm:mt-0'>
        <Button>Encontrar personas</Button>
        <p className='p-2 text-base'> o </p>
        <button className='p-1 text-base underline rounded-md'>Explorar</button>
      </div>
    </form>
  )
}
