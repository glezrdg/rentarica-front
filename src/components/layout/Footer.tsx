import React from 'react'

const Footer = () => {
  return (
    <footer className='b-blue-dark py-20'>
      <div className='container m-auto xl:px-10 flex items-center justify-between'>
        <img src='/assets/logos/logo_dark.png' className='w-[300px]' />

        <div className='flex gap-24 text-slate-300'>
          <div>
            <h4 className='font-bold text-white'>Navegacion</h4>
            <ul>
              <li>Perfil</li>
              <li>Servicios</li>
              <li>Proyectos</li>
              <li>Contactanos</li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-white'>Contacto</h4>
            <ul>
              <li>829-895-8965</li>
              <li>Correo@email.com</li>
              <li>grupoinap.com</li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-white'>Redes Sociales</h4>
            <ul>
              <li>Linkdin</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
