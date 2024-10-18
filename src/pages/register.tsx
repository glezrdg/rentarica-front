import React from 'react'
import { GiIsland } from 'react-icons/gi'
import { FaHouseChimney, FaMoneyBillTrendUp } from 'react-icons/fa6'
import { BiSearchAlt } from 'react-icons/bi'

const register = () => {
  return (
    <div className='py-24 container mx-auto'>
      {/* ABOUT */}
      <div className='grid grid-cols-2'>
        <div className='text-justify place-content-center'>
          <div className='text-5xl text-start font-bold mb-6'>
            <h1>Vende o Alquila tu propiedad:</h1>
            <h1>¡Empieza Aquí!</h1>
          </div>
          <p className='mb-3'>
            Como parte de nuestro esfuerzo por optimizar y agilizar este
            proceso, hemos desarrollado un formulario que nos ayudará a
            recopilar información crucial de manera eficiente de lo que buscas.
          </p>
          <p className='mb-3'>
            Dentro de cada clasificación están nuestros paquetes y servicios que
            ofrecemos, al llenarlo, no olvides escoger cual es el tuyo en el
            caso de las rentas a corto plazo..
          </p>
          <p>
            Cada botón te lleva a un enlace donde completarás el formulario
            según el tipo de propiedad y lo que desee hacer con el:
          </p>
        </div>
        <div>
          <img src='/Apartment.png' />
        </div>
      </div>

      {/* Optionss */}
      <div className='grid grid-cols-5 h-[200px] gap-4 mb-16'>
        <div className='grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500'>
          <div className='text-center'>
            <FaHouseChimney className='text-6xl mb-3 m-auto' />
            <p className='text-xl'>Vender Mi Propiedad</p>
          </div>
        </div>

        <div className='grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500'>
          <div className='text-center'>
            <GiIsland className='text-6xl mb-3 m-auto' />
            <p className='text-xl'>Vender Mi Terreno</p>
          </div>
        </div>
        <div className='grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500'>
          <div className='text-center'>
            <i className='pi pi-dollar text-6xl mb-3' />
            <p className='text-xl'>Alquilar Mi Propiedad</p>
          </div>
        </div>
        <div className='grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500'>
          <div className='text-center'>
            <FaMoneyBillTrendUp className='text-6xl mb-3' />
            <p className='text-xl'>Invertir</p>
          </div>
        </div>
        <div className='grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500'>
          <div className='text-center'>
            <BiSearchAlt className='text-6xl mb-3 m-auto' />
            <p className='text-xl'>Busco Un Hogar</p>
          </div>
        </div>
      </div>

      <div className='w-3/4 text-lg space-y-4'>
        <p>
          Si tienes alguna pregunta, necesitas ayuda o no tienes una información
          a mano no dejes de para completar el formulario, nos comunicaremos
          contigo y en el camino vamos completando todo.
        </p>
        <p>Estamos aquí para ayudarte en cada paso.</p>
        <p>¡Gracias por confiar en nosotros!</p>
      </div>
    </div>
  )
}

export default register
