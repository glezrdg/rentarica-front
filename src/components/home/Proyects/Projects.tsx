import React from 'react'
import ProjectCard from './components/ProjectCard'
import Link from 'next/link'

interface IProjectsProps {
  children?: React.ReactNode
}

const Projects: React.FC<IProjectsProps> = (props) => {
  return (
    <section id='projects' className='container m-auto xl:px-10'>
      {/* PROJECTS HEADER */}
      <div className='h-[25vh] border-b-2 border-slate-300 flex flex-col items-center justify-center mb-10'>
        <p className='text-slate-500 text-base mb-6'>Nuestro Portafolio</p>

        <h1 className='text-5xl font-bold'>Proyectos</h1>
      </div>

      {/* PROJECTS CARDS */}
      <div className='grid grid-cols-3 gap-10'>
        <ProjectCard title='' description='' />
        <ProjectCard title='' description='' />
        <ProjectCard title='' description='' />
        <ProjectCard title='' description='' />
        <ProjectCard title='' description='' />
        <ProjectCard title='' description='' />
      </div>

      <div className='w-full text-center my-12'>
        <Link
          href={'/projects'}
          className='btn-outline block w-fit m-auto !border-blue-950 text-blue-950'
        >
          Conoce mas
        </Link>
      </div>
    </section>
  )
}

export default Projects
