'use client'

import { noto_300 } from '@/utils/fonts'
import ProjectCard from '@/components/home/Proyects/components/ProjectCard'
import Pagination from '@/components/Pagination'
import { projects } from '@/utils/data'
import { useEffect, useRef, useState } from 'react'
import { Slider } from 'primereact/slider'

const index = () => {
  const [searchProjects, setSearchProjects] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [bathroom, setbathroom] = useState<any>([1, 3])
  const [price, setPrice] = useState<any>([3000000, 6000000])
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
      {/* <Hero /> */}
      <div className='pt-36'></div>

      {/* PROJECTS CARDS */}
      <div className='container px-4 xl:px-0 m-auto mb-10'>
        <div className='grid grid-cols-[300px_1fr] gap-4'>
          <div className='bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-4 space-y-12'>
            {/* BATHROOMS */}
            <div>
              <h4 className={`text-lg uppercase ${noto_300.className} mb-4`}>
                Baños{' '}
                {bathroom[0] === bathroom[1]
                  ? `(${bathroom[0]})`
                  : `(${bathroom[0]} - ${bathroom[1]})`}
              </h4>
              <Slider
                value={bathroom}
                onChange={(e) => setbathroom(e.value)}
                range
                min={1}
                max={6}
              />
            </div>
            {/* PRICE */}
            <div>
              <h4 className={`text-lg uppercase ${noto_300.className} mb-4`}>
                Precio{' '}
                {price[0] === price[1]
                  ? `($${price[0]})`
                  : `($${price[0]} - $${price[1]})`}
              </h4>
              <Slider
                value={price}
                onChange={(e) => setPrice(e.value)}
                range
                min={3000000}
                max={10000000}
              />
            </div>
            {/* FLOORS */}
            <div>
              <h4 className={`text-lg uppercase ${noto_300.className} mb-4`}>
                Pisos{' '}
                {bathroom[0] === bathroom[1]
                  ? `(${bathroom[0]})`
                  : `(${bathroom[0]} - ${bathroom[1]})`}
              </h4>
              <Slider
                value={bathroom}
                onChange={(e) => setbathroom(e.value)}
                range
                min={1}
                max={3}
              />
            </div>
            {/* SIZE */}
            <div>
              <h4 className={`text-lg uppercase ${noto_300.className} mb-4`}>
                Tamaño{' '}
                {bathroom[0] === bathroom[1]
                  ? `(${bathroom[0]})`
                  : `(${bathroom[0]} - ${bathroom[1]})`}
              </h4>
              <Slider
                value={bathroom}
                onChange={(e) => setbathroom(e.value)}
                range
                min={1}
                max={3}
              />
            </div>
          </div>
          <div>
            <div className='flex gap-2'>
              <div className='flex-2 flex items-center shadow-xl rounded-3xl h-[50px] md:h-[60px] w-[80vw] md:w-[60vw] lg:w-[50vw] border border-slate-200 overflow-hidden mb-4'>
                <i className='pi pi-search ml-4 text-xl text-slate-600' />
                <input
                  className='bg-white focus:outline-none !border-none hover:!bg-white focus:!bg-white w-full h-full'
                  placeholder='Buscar por codigo...'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className='flex-1 h-[60px] border border-red-500 rounded-3xl grid grid-cols-4 place-items-center uppercase text-xs overflow-hidden cursor-pointer super-shadow'>
                <div className='bg-red-500 w-full h-full grid place-items-center text-white'>
                  <p>Todas</p>
                </div>
                <div>
                  <p>Venta</p>
                </div>
                <div>
                  <p>Alquiler</p>
                </div>
                <div>
                  <p>Terrenos</p>
                </div>
              </div>
            </div>

            <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
          </div>
        </div>

        <Pagination />
      </div>
    </>
  )
}

export default index
