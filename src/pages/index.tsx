import Layout from "../components/Layout/Layout";
import logo from "../img/logolong.png";
import photo1 from "../img/volunteers.png";
import photo2 from "../img/volunteer-blue.png";
import photo3 from "../img/volunteer.jpg";
import vector2 from "../img/vector2.png";
import logo2 from "../img/logosmall.png";

export default function Index() {
  return (
    <Layout>
      <div className="w-full">
        <div className="p-4 shadow-md rounded-md">
          <img
            src={logo}
            className="w-24 sm:w-32 md:w-40 float-left"
            alt="photo-logo"
          />
          <div className="flex justify-end">
            <button className="mr-4 sm:mr-8 p-2 rounded-md bg-yellow-400 text-xs text-white">
              Crea tu cuenta
            </button>
            <button className="p-1 rounded-md underline text-xs">
              Conectarse
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-16">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row pt-12 md:pt-20 pb-8">
              <div className="p-2 md:px-4">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pt-2 sm:pt-0">
                  Donde las personas <br />
                  pueden encontrar el soporte
                  <br /> que necesitan
                </h1>
              </div>
              <div className="flex justify-center sm:justify-end md:justify-end items-center mt-4 sm:mt-0">
                <img
                  src={photo1}
                  className="rounded-md max-w-[24rem] w-full sm:w-auto md:max-w-[28rem]"
                  alt="photo1"
                />
              </div>
            </div>

            <div className="h-28 p-4 shadow-lg rounded-lg flex flex-col sm:flex-row items-center">
              <input
                className="border-2 rounded-md border-grey bg-transparent p-2 mr-2 sm:mr-4 text-xs flex-1"
                placeholder="''Ayuda con mudanza'', ''Comp.."
              />
              <input
                className="border-2 rounded-md border-grey bg-transparent p-2 mr-2 sm:mr-4 text-xs flex-1"
                placeholder="''Madrid', ''Vigo''"
              />
              <div className="flex justify-center sm:justify-between items-center mt-4 sm:mt-0">
                <button className="mr-2 sm:mr-8 p-2 rounded-md bg-yellow-400 text-xs text-white">
                  Encontrar personas
                </button>
                <p className="mr-2 sm:mr-8 p-2 text-xs"> o </p>
                <button className="p-1 rounded-md underline text-xs">
                  Explorar
                </button>
              </div>
            </div>

            <div className="flex flex-col p-4 sm:p-10 pt-12 sm:pt-20 items-center">
              <h1 className="font-bold text-lg sm:text-2xl mb-4">
                Una nueva forma de solidaridad
              </h1>
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex flex-col">
                  <h2 className="font-bold text-base sm:text-xl mb-2 sm:mb-4">
                    Servicios para los que más lo necesitan
                  </h2>
                  <p className="text-xs mb-2 sm:mb-4">
                    Descubre el impacto de la solidaridad: Únete a Kindlink y sé
                    parte de algo más grande. Regístrate ahora para transformar
                    tu deseo de ayudar en acciones concretas.
                  </p>
                  <p className="text-xs mb-2 sm:mb-4">
                    En nuestra comunidad, construimos conexiones significativas.
                    Tú puedes ser el enlace que marca la diferencia. Este no es
                    solo un registro, es la oportunidad de ser el cambio que el
                    mundo necesita.
                  </p>
                  <p className="text-xs mb-2 sm:mb-8">
                    ¿Preparado para formar parte de esta cadena de bondad?
                    Inscríbete hoy y experimenta la gratificación de hacer el
                    bien, sin importar cuán pequeño sea tu aporte. Te damos la
                    bienvenida con los brazos abiertos.
                  </p>
                  <button className="mr-2 mb-4 p-2 rounded-md bg-blue-800 text-xs text-white">
                    Empieza a colaborar con nosotros
                  </button>
                </div>
                <img
                  src={photo2}
                  className="rounded-md w-24 sm:w-[14rem] mt-4 sm:mt-0 ml-0 sm:ml-4"
                  alt="photo2"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center pt-12 sm:pt-16 pb-12 sm:pb-16">
                <img
                  src={photo3}
                  className="rounded-md w-full sm:w-[23rem] mr-0 sm:mr-16"
                  alt="photo3"
                />
                <div className="flex flex-col mt-4 sm:mt-0">
                  <h2 className="font-bold text-base sm:text-xl mb-2 sm:mb-4">
                    Busca. Encuentra. Recibe ayuda
                  </h2>
                  <p className="text-xs mb-2 sm:mb-4">
                    En Kindlink, te ofrecemos un espacio donde tus necesidades
                    no pasan desapercibidas. Busca la ayuda que necesitas y
                    encuentra apoyo real. Regístrate ahora para conectarte con
                    almas generosas listas para ofrecer una mano amiga.
                  </p>
                  <p className="text-xs mb-2 sm:mb-4">
                    No se trata solo de buscar, sino de descubrir una red de
                    solidaridad que está aquí para ti. Este no es solo un
                    registro, es el primer paso para recibir el respaldo que
                    mereces
                  </p>
                  <p className="text-xs mb-2 sm:mb-8">
                    ¿Listo para encontrar la ayuda que necesitas? Regístrate hoy
                    y descubre el poder de la comunidad solidaria que se
                    preocupa por ti. Estamos aquí para tender puentes hacia un
                    mañana mejor.
                  </p>
                  <button className="mr-2 mb-4 p-2 rounded-md bg-blue-800 text-xs text-white">
                    Encuentra la opción perfecta
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row relative w-full items-center justify-center h-[350px]">
                <div className="flex flex-col items-center text-center">
                  <h1 className="pt-4 sm:pt-16 text-lg sm:text-3xl z-10 mx-auto px-4 sm:px-16 pb-4 sm:pb-8 text-white">
                    Únete a la plataforma solidaria <br /> de más rápido
                    crecimiento
                  </h1>
                  <button className="mt-4 p-2 px-8 z-10 mx-auto rounded-md bg-white text-xs text-black">
                    Empezar ahora
                  </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center ">
                  <img
                    src={vector2}
                    className="h-full object-cover"
                    alt="vector2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-4 sm:pt-8">
            <img
              src={logo2}
              className="w-24 sm:w-[11rem] float-left"
              alt="photo-logo2"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
