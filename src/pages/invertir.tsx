import { noto_200, noto_300, noto_thin } from '@/utils/fonts'
import { Dropdown } from 'primereact/dropdown'
import { FaArrowRight } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const invertir = () => {
  return (
    <div className='py-28'>
      {/* Hero */}
      <div className='w-full h-[70vh] grid place-items-center bg-[url(https://o.b5z.net/i/u/11000235/i/2-20150124-q03a1798_revised.jpg)] background-image'>
        <div className='w-[40%]'>
          <h2
            className={`bg-yellow-500 w-fit mb-[2px] text-7xl uppercase p-2 ${noto_300.className}`}
          >
            Invierte con
          </h2>
          <div className='z-10'>
            <h2
              className={`bg-yellow-500 w-fit text-7xl uppercase p-2 ${noto_300.className}`}
            >
              Vision:
            </h2>
          </div>
          <div className='-z-10'>
            <p
              className={`bg-white text-black text-[52px] pt-7 -mt-8 uppercase  p-2 leading-[60px] ${noto_thin.className}`}
            >
              Tu libertad comienza ahora
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='text-center mt-16'>
        <h2 className={`text-6xl uppercase ${noto_200.className}`}>
          Déjanos asesorarte
        </h2>

        <div className='w-[60vw] mx-auto mt-16 gap-10 grid'>
          <img
            src='https://static.wixstatic.com/media/828c94_e91d4c32bf6242298b29677d0bc1c5b0~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1.png'
            alt=''
          />
          <img
            src='https://static.wixstatic.com/media/828c94_28140ea91f934daea51b9dcdf0d319f4~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2.png'
            alt=''
          />
          <img
            src='https://static.wixstatic.com/media/828c94_3944dc6b74a4450bb064560085d280ce~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Terrenos.png'
            alt=''
          />
        </div>
      </div>

      {/*  */}
      <div className='bg-white mt-16 text-center'>
        <h3 className={`text-4xl text-gray-800 font-semibold mb-10`}>
          Próximas Ferias Inmobiliarias
        </h3>

        <p className='leading-8 w-[40%] m-auto'>
          Te invitamos a compartir un momento agradable con nosotros mientras te
          enseñamos las grandes oportunidades que existen de invertir en tu
          país, escoge tu destino y registrare:
        </p>

        <div className='w-[70vw] grid grid-cols-2 gap-8 mx-auto mt-16'>
          <div className='grid grid-cols-2 gap-4'>
            {/* Img */}
            <div>
              <img
                src='https://static.wixstatic.com/media/828c94_4201a7f3fac541c8b9b22322e034c1fc~mv2.jpg/v1/fill/w_345,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pier-6-at-Brooklyn-Bridge-Park.jpg'
                alt=''
                className='shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'
              />
            </div>
            {/* Info */}
            <div className='text-start'>
              <h4 className='text-xl mb-2'>New York | Lawrence</h4>
              <label className='text-sm'>Fecha: 7 y 8 de Diciembre</label>
              <label className='text-sm'>Hora: 10am a 8PM</label>

              <p className='my-6 text-[13px]'>
                Pendiente definir ubicación. Inscríbete si te interesa y
                estaremos enviando la información una vez tengamos todo
                confirmado.
              </p>

              <label className='text-sm'>+1 (809) 893-6553</label>
              <label className='text-sm block'>info@rentarica.com</label>

              <button className='flex gap-4 items-center text-sm bg-orange-500 p-3 my-2'>
                Registrate aqui <FaArrowRight />
              </button>

              {/* Social media */}
              <div className='flex gap-2'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {/* Img */}
            <div>
              <img
                src='https://static.wixstatic.com/media/828c94_4201a7f3fac541c8b9b22322e034c1fc~mv2.jpg/v1/fill/w_345,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pier-6-at-Brooklyn-Bridge-Park.jpg'
                alt=''
                className='shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'
              />
            </div>
            {/* Info */}
            <div className='text-start'>
              <h4 className='text-xl mb-2'>New York | Lawrence</h4>
              <label className='text-sm'>Fecha: 7 y 8 de Diciembre</label>
              <label className='text-sm'>Hora: 10am a 8PM</label>

              <p className='my-6 text-[13px]'>
                Pendiente definir ubicación. Inscríbete si te interesa y
                estaremos enviando la información una vez tengamos todo
                confirmado.
              </p>

              <label className='text-sm'>+1 (809) 893-6553</label>
              <label className='text-sm block'>info@rentarica.com</label>

              <button className='flex gap-4 items-center text-sm bg-orange-500 p-3 my-2'>
                Registrate aqui <FaArrowRight />
              </button>

              {/* Social media */}
              <div className='flex gap-2'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <section className='mt-16'>
        <h3
          className={`text-3xl text-gray-800 text-center font-semibold mb-10`}
        >
          Queremos saber como podemos ayudarte:
        </h3>
        <form className='bg-white p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[45vw] mx-auto'>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Nombre</label>
              <input placeholder='Nombre completo' />
            </div>
            <div className='grid gap-2'>
              <label>País | Ciudad</label>
              <input placeholder='Escribenos en que pais vives:' />
            </div>
          </div>
          {/*  */}
          <div className='grid gap-2 mb-6'>
            <label>Correo</label>
            <input placeholder='Escribe tu correo' />
          </div>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Numero de Tel:</label>
              <input placeholder='Nombre completo' />
            </div>
            <div className='grid gap-2'>
              <label>Como sabes de nosotros:</label>
              <Dropdown placeholder='Favor Seleccionar' options={[]} />
            </div>
          </div>
          {/*  */}
          <div className='grid gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Escoge dónde te quires promover:</label>
              <div className='flex gap-3 text-sm mt-2'>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> lu
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> mar
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> mier
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> juev
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> vier
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> sab
                </label>
              </div>
            </div>
            <div className='grid gap-2'>
              <textarea placeholder='Cuentanos mas...' />
            </div>
          </div>

          {/* BUTTON */}
          <div className='w-full flex mt-12'>
            <button className='bg-yellow-500 font-bold w-[20rem] m-auto p-3 text-xl'>
              Solicitar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default invertir
