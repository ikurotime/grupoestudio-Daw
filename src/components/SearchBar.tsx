import { Button } from './ui/button'

export default function SearchBar() {
  return (
    <div className='flex flex-col items-center p-4 border rounded-lg h-28 sm:flex-row'>
      <input
        className='flex-1 p-2 mr-2 text-base bg-transparent border-2 rounded-md border-grey sm:mr-4'
        placeholder="''Ayuda con mudanza'', ''Comp.."
      />
      <input
        className='flex-1 p-2 mr-2 text-base bg-transparent border-2 rounded-md border-grey sm:mr-4'
        placeholder="''Madrid', ''Vigo''"
      />
      <div className='flex items-center justify-center gap-2 mt-4 sm:justify-between sm:mt-0'>
        <Button>Encontrar personas</Button>
        <p className='p-2 text-base'> o </p>
        <button className='p-1 text-base underline rounded-md'>Explorar</button>
      </div>
    </div>
  )
}
