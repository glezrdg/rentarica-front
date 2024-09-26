import React, { useState } from 'react'
import { Button } from 'primereact/button'

interface IContactUsProps {
  children?: React.ReactNode
  bg?: string
}

const ContactUs: React.FC<IContactUsProps> = ({ bg }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
  })
  const [status, setStatus] = useState(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setStatus(true)
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setStatus(false)
      setFormData({ name: '', email: '', message: '', number: '' })
    } else {
      setStatus(false)
    }
  }

  return (
    <section id='contact' className={`py-20 ${bg && bg}`}>
      <div className='text-center mb-10'>
        <h1 className='font-bold text-4xl mb-4'>Contáctanos</h1>
        <p className='text-slate-400 text-lg'>
          ¿Tienes dudas? Para consultas o más información sobre nuestros
          servicios, ¡envíanos un mensaje!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='grid md:grid-cols-2 rounded-2xl shadow-xl w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[900px] m-auto p-8 gap-4 bg-white'
      >
        {/* CONTACT INFO */}
        <div>
          <div className='flex flex-col mb-3'>
            <label className='mb-2'>Nombre Completo</label>
            <input value={formData.name} onChange={handleChange} name='name' />
          </div>
          <div className='flex flex-col mb-3'>
            <label className='mb-2'>Email</label>
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Número de Teléfono</label>
            <input
              name='number'
              value={formData.number}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CONTACT MESSAGE */}
        <div className='flex flex-col'>
          <label className='mb-2'>Enviar un Mensaje</label>
          <textarea
            className='h-full'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* BUTTON */}
        <div></div>
        <Button
          loading={status}
          className='bg-blue-700 text-white w-fit p-2 rounded-xl px-4 ml-auto'
        >
          Enviar Mensaje
        </Button>
      </form>
    </section>
  )
}

export default ContactUs
