import PropertyCard from "@/components/home/Proyects/components/ProjectCard";
import Pagination from "@/components/Pagination";
import FilterProperties from "@/components/properties/FilterProperties";
import { API_URL } from "@/utils/constants";
import { queryMapper } from "@/utils/queryMapper";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VscSettings } from "react-icons/vsc";
import AirbnbEmbed from "@/components/properties/AirbnbEmbed";
import { Sidebar } from "primereact/sidebar";
import { CiCircleRemove } from "react-icons/ci";

import { Dialog } from 'primereact/dialog'
import { InputText } from "primereact/inputtext";
import { IoMdSearch } from "react-icons/io";

export type Property = {
  _id: string
  title: string
  zone: string
  price: string
  type: string
  category: string
  description: string
  items: string[]
  images: string[]
  bathrooms: number
  rooms: number
  size: number
  floors: number
  selectedPropertyType: any[]
  selectedFeatures: any[]
  isActive: true
  unitPrice: true
}

const index = () => {
  const { t } = useTranslation()
  const [showAirbnb, setShowAirbnb] = useState(false) // Estado para alternar entre Airbnb y propiedades
  const [filters, setFilters] = useState({
    category: '',
    title: '',
    propertyType: '',
    zone: '', // Agregamos el filtro de zona
    priceMin: 0,
    priceMax: 8000000,
    bedMin: 1,
    bedMax: 3,
    floorMin: 1,
    floorMax: 3,
    sizeMin: 1,
    sizeMax: 5000,
    bathMin: 1,
    bathMax: 6,
    selectedPropertyType: '',
    selectedFeatures: [],
    active: true,
  })

  const [visible, setVisible] = useState(false)
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    handleGetProperties(filters)
  }, [filters.category])

  function updateFilter(filterName: string, value: any) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }
  const handleCleanFilters = () => {
    setFilters({
      category: '',
      title: '',
      zone: '',
      propertyType: '',
      priceMin: 0,
      priceMax: 8000000,
      bedMin: 1,
      bedMax: 3,
      floorMin: 1,
      floorMax: 3,
      sizeMin: 1,
      sizeMax: 5000,
      bathMin: 1,
      bathMax: 6,
      selectedFeatures: [],
      selectedPropertyType: '',
      active: true,
    })
  }

  const handleGetProperties = async (queries?: any) => {
    try {
      const res = await fetch(API_URL + 'api/properties' + queryMapper(queries))
      const data = await res.json()
      setProperties(data)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div className='pt-36'></div>

      <div className="container px-4 xl:px-0 m-auto mb-10 min-h-[80vh] flex flex-col">
        <h1 className="text-5xl place-self-center font-semibold my-20 ">
          Tu Próxima Inversión Inmobiliaria:
        </h1>
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          className=' px-0'
          header='Filtros'
        >
          <div className='flex items-center flex-col '>
            <FilterProperties filters={filters} updateFilters={updateFilter} />
            <div className='flex justify-between w-full pt-5'>
              <div
                className='flex items-center justify-center self-start lg:my-0 lg:self-auto cursor-pointer rounded-xl border border-zinc-200 py-2 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
                onClick={() => {
                  handleCleanFilters()
                  handleGetProperties({}) // Fetch properties with cleared filters
                }}
              >
                <CiCircleRemove className='text-xl mr-2' />
                <span className='font-semibold transition-all'>
                  Limpiar Filtros
                </span>
              </div>
              <button
                className='px-4 py-2 text-lg font-semibold rounded-lg bg-accent-yellow-base text-black  shadow-sm self-end'
                onClick={() => {
                  handleGetProperties(filters)
                  setVisible(false)
                }}
              >
                Ver Propiedades Filtradas
              </button>
            </div>
          </div>
        </Dialog>
        {/* <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h2>Filtros</h2>
          <button
            onClick={() => {
              handleGetProperties(filters);
              setVisible(false);
            }}
          >
            Filtrar
          </button>
          <FilterProperties filters={filters} updateFilters={updateFilter} />
        </Sidebar> */}
        {/* Opciones de Filtro */}
        <div className='flex items-center justify-center flex-col lg:flex-row'>
          <div className='rounded-md grid grid-cols-4 place-items-center text-xs gap-4 cursor-pointer my-5 lg:mb-0 lg:mt-0'>
            <div
              onClick={() => {
                updateFilter('category', '')
                setShowAirbnb(false)
              }}
              className={`px-4 py-2 w-full h-full grid place-items-center ${
                filters.category === '' &&
                !showAirbnb &&
                'border-accent-yellow-base border-b-4 rounded-lg'
              }`}
            >
              <img src='/assets/svgs/house.svg' alt='' className='h-10 w-10' />
              <p className='text-base font-semibold mt-1'>
                {t('properties.categories.all')}
              </p>
            </div>
            <div
              onClick={() => {
                updateFilter('category', 'En venta')
                setShowAirbnb(false)
              }}
              className={`px-4 py-2 w-full h-full grid place-items-center ${
                filters.category === 'En venta' &&
                !showAirbnb &&
                'border-accent-yellow-base border-b-4 rounded-lg'
              }`}
            >
              <img src='/assets/svgs/onsale.svg' alt='' className='h-10 w-10' />
              <p className='text-base font-semibold mt-1'>
                {t('properties.categories.sale')}
              </p>
            </div>
            <div
              onClick={() => {
                updateFilter('category', 'En Alquiler')
                setShowAirbnb(false)
              }}
              className={`px-4 py-2 w-full h-full grid place-items-center ${
                filters.category === 'En Alquiler' &&
                !showAirbnb &&
                'border-accent-yellow-base border-b-4 rounded-lg'
              }`}
            >
              <img src='/assets/svgs/rent.svg' alt='' className='h-10 w-10' />
              <p className='text-base font-semibold mt-1'>
                {t('properties.categories.rent')}
              </p>
            </div>
            {/* <div
              onClick={() => {
                updateFilter('category', 'Terreno')
                setShowAirbnb(false)
              }}
              className={`px-4 py-2 w-full h-full grid place-items-center ${
                filters.category === 'Terreno' &&
                !showAirbnb &&
                'border-accent-yellow-base border-b-4 rounded-lg'
              }`}
            >
              <img
                src='/assets/svgs/terrain.svg'
                alt=''
                className='h-10 w-10'
              />
              <p className='text-base font-semibold mt-1'>
                {t('properties.categories.land')}
              </p>
            </div> */}
            <div
              onClick={() => {
                setShowAirbnb(true)
                updateFilter('category', 'Renta Corta') // Limpia el filtro de categoría cuando seleccionas Airbnb
              }}
              className={`px-4 py-2 w-full h-full grid place-items-center ${
                showAirbnb && 'border-accent-yellow-base border-b-4 rounded-lg'
              }`}
            >
              <img src='/assets/svgs/house.svg' alt='' className='h-10 w-10' />
              <p className='text-base font-semibold mt-1'>Renta Corta</p>
            </div>
          </div>

          <div
            className='flex items-center justify-center self-start mt-10 lg:my-0 lg:self-auto lg:ml-10 cursor-pointer rounded-xl border border-zinc-200 py-4 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
            onClick={() => setVisible(true)}
          >
            <VscSettings className='text-xl mr-2' />
            <span className='font-semibold transition-all'>Más Filtros:</span>
          </div>
          <div
            className='flex items-center justify-center self-start mt-10 lg:my-0 lg:self-auto lg:ml-10 cursor-pointer rounded-xl border border-zinc-200 py-4 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
            onClick={() => {
              handleCleanFilters()
              handleGetProperties({}) // Fetch properties with cleared filters
            }}
          >
            <CiCircleRemove className='text-xl mr-2' />
            <span className='font-semibold transition-all'>
              Limpiar Filtros
            </span>
          </div>
        </div>
        <div className="self-center flex items-center border-black rounded-lg border-b-2 mt-7 p-2">
          <input
            className=" focus:outline-none  border-none"
            placeholder="Buscar por código"
          />{" "}
          <IoMdSearch className="text-xl" />
        </div>

        {/* Sección de Propiedades o Airbnb */}
        <div className='w-full'>
          {showAirbnb ? (
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  min-h-[40vh] p-4'>
              <AirbnbEmbed listingId='1279118026077470895' />
              <AirbnbEmbed listingId='1279856251934555362' />
              <AirbnbEmbed listingId='1222715409213583749' />
              <AirbnbEmbed listingId='1161829567828550752' />
            </div>
          ) : (
            <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20'>
              {properties.length ? (
                properties.map((p) => <PropertyCard property={p} key={p._id} />)
              ) : (
                <div className='col-span-4 place-self-center py-8'>
                  <p className='text-center text-xl'>
                    {t('properties.no_results')}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Paginación */}
        {!showAirbnb && <Pagination />}
      </div>
    </>
  )
}

export default index
