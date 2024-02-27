interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return <div className='flex w-full max-w-[980px] m-auto'>{children}</div>
}
