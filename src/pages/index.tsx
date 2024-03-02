import Layout from '../components/Layout/Layout'

export default function Index() {
  return (
    <Layout>
      <div className='w-full'>
        <div className='px-4 sm:px-8 md:px-16'>
          <div className='flex flex-col'>
            <div className='flex flex-col pt-12 pb-8 sm:flex-row md:pt-20'>
              <div className='p-2 md:px-4'>
                <h1 className='pt-2 text-xl font-bold sm:text-2xl md:text-3xl sm:pt-0'>
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

            <div className='flex flex-col items-center p-4 rounded-lg shadow-lg h-28 sm:flex-row'>
              <input
                className='flex-1 p-2 mr-2 text-xs bg-transparent border-2 rounded-md border-grey sm:mr-4'
                placeholder="''Ayuda con mudanza'', ''Comp.."
              />
              <input
                className='flex-1 p-2 mr-2 text-xs bg-transparent border-2 rounded-md border-grey sm:mr-4'
                placeholder="''Madrid', ''Vigo''"
              />
              <div className='flex items-center justify-center mt-4 sm:justify-between sm:mt-0'>
                <button className='p-2 mr-2 text-xs text-white bg-yellow-400 rounded-md sm:mr-8'>
                  Encontrar personas
                </button>
                <p className='p-2 mr-2 text-xs sm:mr-8'> o </p>
                <button className='p-1 text-xs underline rounded-md'>
                  Explorar
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center p-4 pt-12 sm:p-10 sm:pt-20'>
              <h1 className='mb-4 text-lg font-bold sm:text-2xl'>
                Una nueva forma de solidaridad
              </h1>
              <div className='flex flex-col items-center sm:flex-row'>
                <div className='flex flex-col'>
                  <h2 className='mb-2 text-base font-bold sm:text-xl sm:mb-4'>
                    Servicios para los que más lo necesitan
                  </h2>
                  <p className='mb-2 text-xs sm:mb-4'>
                    Descubre el impacto de la solidaridad: Únete a Kindlink y sé
                    parte de algo más grande. Regístrate ahora para transformar
                    tu deseo de ayudar en acciones concretas.
                  </p>
                  <p className='mb-2 text-xs sm:mb-4'>
                    En nuestra comunidad, construimos conexiones significativas.
                    Tú puedes ser el enlace que marca la diferencia. Este no es
                    solo un registro, es la oportunidad de ser el cambio que el
                    mundo necesita.
                  </p>
                  <p className='mb-2 text-xs sm:mb-8'>
                    ¿Preparado para formar parte de esta cadena de bondad?
                    Inscríbete hoy y experimenta la gratificación de hacer el
                    bien, sin importar cuán pequeño sea tu aporte. Te damos la
                    bienvenida con los brazos abiertos.
                  </p>
                  <button className='p-2 mb-4 mr-2 text-xs text-white bg-blue-800 rounded-md'>
                    Empieza a colaborar con nosotros
                  </button>
                </div>
                <img
                  src='/img/volunteer-blue.png'
                  className='rounded-md w-24 sm:w-[14rem] mt-4 sm:mt-0 ml-0 sm:ml-4'
                  alt='Una foto de una chica vestida con una chaqueta azul sonriendo, de fondo una pared azul'
                />
              </div>

              <div className='flex flex-col items-center pt-12 pb-12 sm:flex-row sm:pt-16 sm:pb-16'>
                <img
                  src='/img/volunteer.jpg'
                  className='rounded-md w-full sm:w-[23rem] mr-0 sm:mr-16'
                  alt='Un grupo de personas sentadas en una mesa, conversando'
                />
                <div className='flex flex-col mt-4 sm:mt-0'>
                  <h2 className='mb-2 text-base font-bold sm:text-xl sm:mb-4'>
                    Busca. Encuentra. Recibe ayuda
                  </h2>
                  <p className='mb-2 text-xs sm:mb-4'>
                    En Kindlink, te ofrecemos un espacio donde tus necesidades
                    no pasan desapercibidas. Busca la ayuda que necesitas y
                    encuentra apoyo real. Regístrate ahora para conectarte con
                    almas generosas listas para ofrecer una mano amiga.
                  </p>
                  <p className='mb-2 text-xs sm:mb-4'>
                    No se trata solo de buscar, sino de descubrir una red de
                    solidaridad que está aquí para ti. Este no es solo un
                    registro, es el primer paso para recibir el respaldo que
                    mereces
                  </p>
                  <p className='mb-2 text-xs sm:mb-8'>
                    ¿Listo para encontrar la ayuda que necesitas? Regístrate hoy
                    y descubre el poder de la comunidad solidaria que se
                    preocupa por ti. Estamos aquí para tender puentes hacia un
                    mañana mejor.
                  </p>
                  <button className='p-2 mb-4 mr-2 text-xs text-white bg-blue-800 rounded-md'>
                    Encuentra la opción perfecta
                  </button>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row relative w-full items-center justify-center h-[350px]'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='z-10 px-4 pt-4 pb-4 mx-auto text-lg text-white sm:pt-16 sm:text-3xl sm:px-16 sm:pb-8'>
                    Únete a la plataforma solidaria <br /> de más rápido
                    crecimiento
                  </h1>
                  <button className='z-10 p-2 px-8 mx-auto mt-4 text-xs text-black bg-white rounded-md'>
                    Empezar ahora
                  </button>
                </div>
                <div className='absolute inset-0 flex items-center justify-center '>
                  <img
                    src='/img/vector2.png'
                    className='object-cover h-full'
                    alt='Una ilustracion abstacta'
                  />
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
