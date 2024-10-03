'use client'

import ContactUs from '@/components/home/ContactUs'
import Layout from '@/components/layout/Layout'
import Galeria from '@/components/projects/Galeria'
import { projects } from '@/utils/data'
import { useParams } from 'next/navigation'

const index = () => {
  const PARAMS = useParams()

  console.log('pddad', PARAMS)

  let project = projects.find((p) => p.id === +PARAMS?.id)

  return (
    <>
      <div
        className='w-full h-[60vh] text-white'
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${project?.images[0]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col gap-10 justify-center items-center h-full bg-black bg-opacity-50'>
          <h1 className='text-3xl md:text-5xl md:w-[70%] text-white font-bold text-center leading-[40px] lg:leading-[70px]'>
            {project?.title}
          </h1>

          <div className='bg-slate-100 p-1 px-3 rounded-2xl text-xs text-slate-600'>
            {project?.category}
          </div>
          {project?.on_build && (
            <div className='bg-slate-100 p-1 px-3 rounded-2xl text-lg b-orange text-white'>
              En Curso
            </div>
          )}
        </div>
      </div>

      <div className='grid lg:grid-cols-[40%_1fr] gap-12 my-14 place-items-center container mx-auto px-4 xl:px-10'>
        <div>
          <p className='text-xl leading-10 py-6 text-justify'>
            {project?.first_description}
          </p>
          <p className='text-xl leading-10 text-justify'>
            {project?.sec_description}
          </p>
          <ul className='text-xl list-disc text-justify leading-10 p-4'>
            {project?.items?.map((i) => (
              <li className='list-item'>{i}</li>
            ))}
          </ul>
        </div>
        <Galeria images={project?.images} />
        {/* <img
          className='w-[100%] rounded-3xl text-center'
          src='https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg'
        /> */}
      </div>

      <ContactUs bg='bg-slate-100' />
    </>
  )
}

export default index
