import { Button } from '@/components/ui/button'
import Layout from '../components/Layout/Layout'
import { useLocation } from 'wouter'
import SearchBar from '@/components/SearchBar'

export default function Index() {
  const [, setLocation] = useLocation()
  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <div className='flex w-full px-4 justify-evenly sm:px-8 md:px-16'>
          <div className='flex flex-col'>
            <div className='flex flex-row pt-12 pb-8 gap-8 min-h-[70vh] justify-evenly sm:flex-row md:pt-20'>
              <div className='flex flex-col justify-center h-full p-2 md:px-4'>
                <h1 className='pt-2 text-xl font-bold sm:text-2xl md:text-5xl sm:pt-0'>
                  Donde las personas <br />
                  pueden encontrar el soporte
                  <br /> que necesitan
                </h1>
              </div>
              <div className='flex items-center justify-center mt-4 sm:justify-end md:justify-end sm:mt-0'>
                <img
                  src='/img/volunteers.png'
                  className='rounded-md max-w-[24rem] w-full sm:w-auto md:max-w-[28rem]'
                  alt='photo1'
                />
              </div>
            </div>

            <SearchBar />

            <div className='flex flex-col items-center p-4 pt-12 sm:p-10 sm:pt-20'>
              <h1 className='my-8 text-2xl font-bold md:mb-24 sm:text-4xl'>
                Una nueva forma de solidaridad
              </h1>
              <div className='flex flex-col items-center gap-14 sm:flex-row'>
                <div className='flex flex-col max-w-xl p-5 border rounded-lg'>
                  <h2 className='mb-2 text-base font-bold sm:text-xl sm:mb-4'>
                    Servicios para los que más lo necesitan
                  </h2>
                  <p className='mb-2 text-base sm:mb-4'>
                    Descubre el impacto de la solidaridad: Únete a Kindlink y sé
                    parte de algo más grande. Regístrate ahora para transformar
                    tu deseo de ayudar en acciones concretas.
                  </p>
                  <p className='mb-2 text-base sm:mb-4'>
                    En nuestra comunidad, construimos conexiones significativas.
                    Tú puedes ser el enlace que marca la diferencia. Este no es
                    solo un registro, es la oportunidad de ser el cambio que el
                    mundo necesita.
                  </p>
                  <p className='mb-2 text-base sm:mb-8'>
                    ¿Preparado para formar parte de esta cadena de bondad?
                    Inscríbete hoy y experimenta la gratificación de hacer el
                    bien, sin importar cuán pequeño sea tu aporte. Te damos la
                    bienvenida con los brazos abiertos.
                  </p>
                  <button className='p-2 mb-4 mr-2 font-bold text-white bg-blue-800 rounded-md text-md'>
                    Empieza a colaborar con nosotros
                  </button>
                </div>
                <img
                  src='/img/volunteer-blue.png'
                  className='rounded-md w-full object-cover md:aspect-auto sm:w-[14rem] mt-4 sm:mt-0 ml-0 sm:ml-4 aspect-video '
                  alt='Una foto de una chica vestida con una chaqueta azul sonriendo, de fondo una pared azul'
                />
              </div>

              <div className='flex flex-col items-center pt-12 pb-12 sm:flex-row sm:pt-16 sm:pb-16'>
                <img
                  src='/img/volunteer.jpg'
                  className='rounded-md w-full sm:w-[23rem] mr-0 sm:mr-16'
                  alt='Un grupo de personas sentadas en una mesa, conversando'
                />
                <div className='flex flex-col max-w-xl p-5 mt-4 border rounded-lg sm:mt-0'>
                  <h2 className='mb-2 text-base font-bold sm:text-xl sm:mb-4'>
                    Busca. Encuentra. Recibe ayuda
                  </h2>
                  <p className='mb-2 text-base sm:mb-4'>
                    En Kindlink, te ofrecemos un espacio donde tus necesidades
                    no pasan desapercibidas. Busca la ayuda que necesitas y
                    encuentra apoyo real. Regístrate ahora para conectarte con
                    almas generosas listas para ofrecer una mano amiga.
                  </p>
                  <p className='mb-2 text-base sm:mb-4'>
                    No se trata solo de buscar, sino de descubrir una red de
                    solidaridad que está aquí para ti. Este no es solo un
                    registro, es el primer paso para recibir el respaldo que
                    mereces
                  </p>
                  <p className='mb-2 text-base sm:mb-8'>
                    ¿Listo para encontrar la ayuda que necesitas? Regístrate hoy
                    y descubre el poder de la comunidad solidaria que se
                    preocupa por ti. Estamos aquí para tender puentes hacia un
                    mañana mejor.
                  </p>
                  <button className='p-2 mb-4 mr-2 text-base text-white bg-blue-800 rounded-md'>
                    Encuentra la opción perfecta
                  </button>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row relative w-full items-center justify-center min-h-[550px] bg-blob bg-no-repeat bg-center bg-contain'>
                <div className='flex flex-col items-center justify-center mt-6 text-center'>
                  <h1 className='px-4 pt-4 pb-4 mx-auto text-lg font-bold text-white m:pt-16 sm:text-6xl sm:px-16 sm:pb-8'>
                    Únete a la plataforma solidaria <br /> de más rápido
                    crecimiento
                  </h1>
                  <Button
                    onClick={() => setLocation('/signin')}
                    variant='secondary'
                  >
                    Empezar ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='pt-4 sm:pt-8'>
            <img
              src='/img/logosmall.png'
              className='w-24 sm:w-[11rem] float-left'
              alt='photo-logo2'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
