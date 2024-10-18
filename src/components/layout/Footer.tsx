import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-10'>
      <div className='container xl:!w-[70%] m-auto grid grid-cols-2'>
        <div className='text-white grid gap-12'>
          <div>
            <h3 className='flex items-center gap-4 text-xl mb-12'>
              <span className='w-4 h-4 rounded-full bg-orange-700 block'></span>
              Menu
            </h3>

            <ul className='space-y-3 pl-2'>
              <Link href={'/#perfil'} className='block'>
                Home
              </Link>
              <Link href={'/#services'} className='block'>
                Invierte Con Nosotros
              </Link>
              <Link href={'/#projects'} className='block'>
                Feria Rentarica
              </Link>
              <Link href={'/#contact'} className='block'>
                Registra tu propiedad
              </Link>
              <Link href={'/#contact'} className='block'>
                Anunciate Con Nosotros
              </Link>
              <Link href={'/#contact'} className='block'>
                Paneles Solares
              </Link>
              <Link href={'/#contact'} className='block'>
                Propiedades
              </Link>
            </ul>
          </div>
          <div>
            <h3 className='flex items-center gap-4 text-xl mb-12'>
              <span className='w-4 h-4 rounded-full bg-yellow-400 block'></span>
              Contáctanos
            </h3>

            <ul className='space-y-3 pl-2 text-lg'>
              <li>Tel: 809-893-6553</li>
              <li>Email: info@rentarica.com</li>
            </ul>
          </div>
        </div>

        <div className='text-white w-full justify-items-end'>
          <h3 className='flex items-center gap-4 text-xl mb-12 w-3/4'>
            <span className='w-4 h-4 rounded-full bg-white block'></span>
            Déjanos un mensaje
          </h3>

          <form className='w-[70%] space-y-8'>
            <div className='flex flex-col'>
              <label>Nombre:</label>
              <input className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none ' />
            </div>
            <div className='flex flex-col'>
              <label>Apellido:</label>
              <input className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none ' />
            </div>
            <div className='flex flex-col'>
              <label>Correo:</label>
              <input className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none ' />
            </div>
            <div className='flex flex-col'>
              <label>Número de Teléfono:</label>
              <input className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none ' />
            </div>
            <div className='flex flex-col'>
              <label>Deseas info de alguna feria o evento:</label>
              <input
                className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none '
                placeholder='Escribenos al respecto'
              />
            </div>
            <div className='flex flex-col'>
              <label>Escríbe tu mensaje:</label>
              <textarea className='!bg-transparent border-b-2 border-white rounded-none focus:outline-none ' />
            </div>
            <button className='bg-yellow-500 p-2 text-xl w-32 text-black'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
