import { noto_300 } from '@/utils/fonts'
import React from 'react'

const index = () => {
  return (
    <main className='py-28'>
      {/* Hero */}
      <div className='w-full h-[60vh] grid place-items-center bg-[url(https://arichyhomes.com/wp-content/uploads/2023/08/Long-term-rental-villa-in-Cap-Cana-13_1_1.jpg)] background-image'>
        <div className='w-[40%]'>
          <h2
            className={`bg-white text-5xl uppercase p-2 ${noto_300.className}`}
          >
            Impulsa tu negocio, Crece con nostros
          </h2>
          <p className='bg-black text-white text-lg p-2 leading-8'>
            Conoce nuestros nuestros paquetes publicitarios, si te interesa
            alguno favor llena el formulario debajo...
          </p>
          <div className='w-full'>
            <button className='bg-yellow-500 font-bold w-[20rem] !mx-auto mt-8 p-3 text-xl'>
              Catalogo
            </button>
          </div>
        </div>
      </div>

      <div className='grid xl:w-[50vw] container mx-auto p-6 gap-14'>
        {/* INFO */}
        <div className=''>
          <h1 className='text-4xl font-bold mb-10'>
            ¿Quieres Anunciarte con nosotros?
          </h1>

          <p className='text-sm text-justify'>
            Tu éxito es nuestra prioridad y, para ayudarte a crecer, necesitamos
            conocer a fondo tu marca, emprendimiento o negocio.
            <br />
            <br />
            Por favor, proporciónanos la máxima información posible al completar
            el siguiente formulario.
            <br />
            <br />
            Si tu propuesta cumple con nuestros requisitos, nos pondremos en
            contacto contigo para explorar las oportunidades de colaboración.
            <br />
            <br />
            En caso contrario, recibirás una notificación vía correo
            electrónico. Agradecemos sinceramente tu interés y tiempo
            dedicado...
          </p>
        </div>

        {/* Form */}
        <form className='bg-white p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
          </div>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
          </div>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
            <div className='grid gap-2'>
              <label>Nombre del contacto</label>
              <input placeholder='Nombre y apellido' />
            </div>
          </div>
          {/*  */}
          <div className='grid gap-2 mb-6'>
            <label>Nombre del contacto</label>
            <input placeholder='Nombre y apellido' />
          </div>
          {/*  */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='grid gap-2'>
              <label>Escoge dónde te quires promover:</label>
              <div className='grid gap-3 text-sm'>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Pagina web | Home
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Pagina web |
                  Comprar y Alquilar
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Pagina web | Invest
                  Now
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Pagina web |
                  Consierge
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Mailing
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Entrevista | Radio
                  | RRSS | PW
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Airbnb Property
                  Flyer
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Redes Sociales
                </label>
                <label className='flex items-center gap-8'>
                  {' '}
                  <input type='checkbox' className='!p-2' /> Otro
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
      </div>
    </main>
  )
}

export default index
