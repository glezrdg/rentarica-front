'use client'

import ProjectCard from '@/components/home/Proyects/components/ProjectCard'
import Pagination from '@/components/Pagination'
import Hero from '@/components/projects/Hero'

const index = () => {
  return (
    <>
      <Hero />

      <div className='h-[20vh] lg:h-[30vh] flex items-center justify-between w-full container m-auto px-2 xl:px-10'>
        <div className='flex gap-6'>
          <div className='flex items-center shadow-xl rounded-full h-[50px] md:h-[60px] lg:h-[70px] w-[80vw] md:w-[60vw] lg:w-[40vw] border border-slate-200 overflow-hidden'>
            <i className='pi pi-search ml-4 text-xl text-slate-600' />
            <input
              className='bg-white focus:outline-none w-full h-full'
              placeholder='Buscar... (Nombre, Categoria)'
            />
          </div>
          <button className='hidden lg:block bg-blue-800 text-white w-[200px] p-2 rounded-full px-4 ml-auto text-lg font-bold'>
            Buscar
          </button>
        </div>

        <div className='flex items-center'>
          <i className='pi pi-filter mr-4' />
          <p className='hidden md:block'>Filtrar por servicio</p>
        </div>
      </div>

      {/* PROJECTS CARDS */}
      <div className='container px-4 xl:px-10 m-auto mb-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
        </div>

        <Pagination />
      </div>
    </>
  )
}

export default index
