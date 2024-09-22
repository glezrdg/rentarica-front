'use client'

import { useEffect, useRef, useState } from 'react'
import { OverlayPanel } from 'primereact/overlaypanel'
import { MultiSelect } from 'primereact/multiselect'
import ProjectCard from '@/components/home/Proyects/components/ProjectCard'
import Pagination from '@/components/Pagination'
import Hero from '@/components/projects/Hero'
import { categories, projects } from '@/utils/data'
import { Dropdown } from 'primereact/dropdown'

const index = () => {
  const [searchProjects, setSearchProjects] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<number>()

  useEffect(() => {
    if (search || selectedCategories) {
      setSearchProjects(
        projects.filter((p) => {
          if (search && selectedCategories)
            return (
              p.title.toLowerCase().includes(search.toLowerCase()) &&
              p.categories.includes(selectedCategories!)
            )
          if (search)
            return p.title.toLowerCase().includes(search.toLowerCase())
          if (selectedCategories)
            return p.categories.includes(selectedCategories!)
        })
      )
    } else {
      setSearchProjects(projects)
    }
  }, [search, selectedCategories])

  const op: any = useRef(null)

  return (
    <>
      <Hero />

      <div className='h-[20vh] lg:h-[30vh] flex flex-col md:flex-row items-center md:gap-6 justify-evenly md:justify-between container m-auto px-2 xl:px-10'>
        <div className='flex gap-6'>
          <div className='flex items-center shadow-xl rounded-full h-[50px] md:h-[60px] lg:h-[70px] w-[80vw] md:w-[60vw] lg:w-[50vw] border border-slate-200 overflow-hidden'>
            <i className='pi pi-search ml-4 text-xl text-slate-600' />
            <input
              className='bg-white focus:outline-none w-full h-full'
              placeholder='Buscar por nombre...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* <button className='hidden lg:block bg-blue-800 text-white w-[200px] p-2 rounded-full px-4 ml-auto text-lg font-bold'>
            Buscar
          </button> */}
        </div>

        <div
          className='relative flex items-center'
          onClick={(e) => op?.current?.toggle(e)}
        >
          <i className='pi pi-filter mr-4' />
          <Dropdown
            className='lg:w-[250px]'
            options={[{ id: 0, name: 'Todos' }, ...categories]}
            onChange={(e) => setSelectedCategories(e.target.value)}
            value={selectedCategories}
            optionLabel='name'
            optionValue='id'
            placeholder='Filtrar por servicio'
          />
          {/* <OverlayPanel ref={op}></OverlayPanel> */}
        </div>
      </div>

      {/* PROJECTS CARDS */}
      <div className='container px-4 xl:px-10 m-auto mb-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {searchProjects.length ? (
            <>
              {searchProjects.map((p) => (
                <ProjectCard project={p} />
              ))}
            </>
          ) : (
            <div className='col-span-3 py-8'>
              <p className='text-center'>NO HAY RESULTADOS</p>
            </div>
          )}
        </div>

        <Pagination />
      </div>
    </>
  )
}

export default index
