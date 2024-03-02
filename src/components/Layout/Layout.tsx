import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-1 w-full max-w-[980px] flex-col gap-1 mx-auto'>
      <Navbar />
      {children}
    </div>
  )
}
