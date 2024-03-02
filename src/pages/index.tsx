import Layout from '../components/Layout/Layout'
import logo2 from '../img/logosmall.png'
import photo1 from '../img/volunteers.png'
import photo2 from '../img/volunteer-blue.png'
import photo3 from '../img/volunteer.jpg'
import vector2 from '../img/vector2.png'

export default function Index() {
  return (
    <Layout>
      <div className='w-full'>
        <div className='px-16'>
          <div className='flex flex-col'>
            <div className='flex flex-row pt-20 pb-8'>
              <div className='p-2 pm-4'>
                <h1 className='pt-4 pl-10 text-3xl font-bold '>
                  Donde las personas <br />
                  pueden encontrar el soporte
                  <br /> que necesitan
                </h1>
              </div>
              <div className='flex justify-end '>
                <img
                  src={photo1}
                  className='rounded-md max-w-[128rem] w-full lg:w-auto xl:max-w-[28rem] pl-20'
                  alt='photo1'
                />
              </div>
            </div>

            <div className='flex items-center p-4 rounded-lg shadow-lg h-28'>
              <input
                className='p-2 mr-4 bg-transparent border-2 rounded-md border-grey '
                placeholder="''Ayuda con mudanza'', ''Comp.."
              />
              <input
                className='p-2 mr-4 bg-transparent border-2 rounded-md border-grey'
                placeholder="''Madrid', ''Vigo''"
              />
              <div className='flex items-center justify-between ml-auto'>
                <button className='p-2 mr-8 text-xs text-white bg-yellow-400 rounded-md'>
                  Encontrar personas
                </button>
                <p className='p-2 mr-8 text-xs'> o </p>
                <button className='p-1 mr-8 text-xs underline rounded-md'>
                  Explorar
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center p-10 pt-20'>
              <h1 className='mb-4 text-2xl font-bold'>
                Una nueva forma de solidaridad
              </h1>
              <div className='flex flex-row items-center'>
                <div className='flex flex-col '>
                  <h2 className='mb-4 text-xl font-bold'>
                    Servicios parea los que más lo necesitan
                  </h2>
                  <p className='pr-32 mb-4 text-xs'>
                    'Descubre el impacto de la solidaridad: Únete a Kindlink y
                    sé parte de algo más grande. Regístrate ahora para
                    transformar tu deseo de ayudar en acciones concretas.{' '}
                  </p>
                  <p className='pr-32 mb-4 text-xs '>
                    En nuestra comunidad, construimos conexiones significativas.
                    Tú puedes ser el enlace que marca la diferencia. Este no es
                    solo un registro, es la oportunidad de ser el cambio que el
                    mundo necesita.
                  </p>
                  <p className='pr-32 mb-8 text-xs'>
                    ¿Preparado para formar parte de esta cadena de bondad?
                    Inscríbete hoy y experimenta la gratificación de hacer el
                    bien, sin importar cuán pequeño sea tu aporte. Te damos la
                    bienvenida con los brazos abiertos.'
                  </p>
                  <button className='mr-[300px] p-2 rounded-md bg-blue-800 text-xs text-white'>
                    Empieza a colaborar con nosotros
                  </button>
                </div>
                <img
                  src={photo2}
                  className='rounded-md w-[14rem] mr-4'
                  alt='photo2'
                />
              </div>

              <div className='flex flex-row items-center pt-16 pb-16'>
                <img
                  src={photo3}
                  className='rounded-md w-[23rem] mr-16'
                  alt='photo3'
                />
                <div className='flex flex-col '>
                  <h2 className='mt-4 mb-4 text-xl font-bold'>
                    Busca. Encuentra. Recibe ayuda
                  </h2>
                  <p className='mb-4 text-xs'>
                    En Kindlink, te ofrecemos un espacio donde tus necesidades
                    no pasan desapercibidas. Busca la ayuda que necesitas y
                    encuentra apoyo real. Regístrate ahora para conectarte con
                    almas generosas listas para ofrecer una mano amiga.
                  </p>
                  <p className='mb-4 text-xs '>
                    No se trata solo de buscar, sino de descubrir una red de
                    solidaridad que está aquí para ti. Este no es solo un
                    registro, es el primer paso para recibir el respaldo que
                    mereces
                  </p>
                  <p className='mb-8 text-xs'>
                    ¿Listo para encontrar la ayuda que necesitas? Regístrate hoy
                    y descubre el poder de la comunidad solidaria que se
                    preocupa por ti. Estamos aquí para tender puentes hacia un
                    mañana mejor.
                  </p>
                  <button className='mr-[80px] mb-4 p-2 rounded-md bg-blue-800 text-xs text-white'>
                    Encuentra la opción perfecta
                  </button>
                </div>
              </div>

              <div className='flex flex-row relative w-full items-center justify-center h-[350px]'>
                <div className='flex flex-col '>
                  <h1 className='z-10 px-16 pt-16 pb-8 mx-auto text-3xl text-center text-white'>
                    {' '}
                    Únete a la plataforma solidaria <br /> de más rápido
                    crecimiento
                  </h1>

                  <button className='z-10 items-center justify-center p-2 px-16 mx-auto mb-4 text-xs text-black bg-white rounded-md '>
                    Empezar ahora
                  </button>
                </div>
                <div className='absolute inset-0 flex items-center justify-center '>
                  <img
                    src={vector2}
                    className='object-cover h-full'
                    alt='vector2'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='pt-8'>
            <img
              src={logo2}
              className='float-left w-[11rem]'
              alt='photo-logo2'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
