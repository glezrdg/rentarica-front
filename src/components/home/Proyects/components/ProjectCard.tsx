import Link from 'next/link'
import React from 'react'

export interface IProjectCardProps {
  project: any
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <div className='relative rounded-lg bg-slate-100 w-full overflow-hidden'>
      <div className='absolute right-5 top-2 bg-slate-100 p-1 px-3 rounded-2xl text-xs text-slate-600'>
        {project.category}
      </div>
      {/* IMAGE */}
      <div className='mb-4'>
        <img className='h-[200px] w-full' src={project.images[0]} />
      </div>

      {/* CONTENT */}
      <div className='px-8 pb-2'>
        <h1 className='font-bold text-base mb-2'>{project.title}</h1>
        <p className='mb-6 text-xs text-slate-500 line-clamp-3'>
          {project.first_description}
        </p>
        <Link
          href={`/projects/${project.id}`}
          className='btn-orange !py-1 block w-fit !px-6'
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
