import React from 'react'

interface IContactUsProps {
  children?: React.ReactNode
  bg?: string
}

const ContactUs: React.FC<IContactUsProps> = ({ bg }) => {
  return (
    <section id='contact' className={`py-20 ${bg && bg}`}>
      <div className='text-center mb-10'>
        <h1 className='font-bold text-4xl mb-4'>Contactanos</h1>
        <p className='text-slate-400 text-lg'>
          Pellentesque convallis accumsan suscipit aliquet eu diam quis nulla
          turpis.
        </p>
      </div>

      <form className='grid md:grid-cols-2 rounded-2xl shadow-xl w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[900px] m-auto p-8 gap-4 bg-white'>
        {/* CONTACT INFO */}
        <div>
          <div className='flex flex-col mb-3'>
            <label className='mb-2'>Nombre Completo</label>
            <input />
          </div>
          <div className='flex flex-col mb-3'>
            <label className='mb-2'>Email</label>
            <input />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Numero de telefono</label>
            <input />
          </div>
        </div>

        {/* CONTACT MESSAGE */}
        <div className='flex flex-col'>
          <label className='mb-2'>Enviar un mensaje</label>
          <textarea className='h-full' />
        </div>

        {/* BUTTON */}
        <div></div>
        <button className='bg-blue-700 text-white w-fit p-2 rounded-xl px-4 ml-auto'>
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default ContactUs
