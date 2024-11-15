'use client'

import { Slider } from 'primereact/slider'
import { Dropdown } from 'primereact/dropdown'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropertyTypeSelector from './PropertiesType'
import PropertyFeaturesSelector from './PropertyFeaturesSelector'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'

const zones = [
  {
    label: 'Santo Domingo y Santiago',
    code: 'DO',
    items: [
      { label: 'Santo Domingo Centro', value: 'Santo Domingo Centro' },
      { label: 'Santo Domingo Este', value: 'Santo Domingo Este' },
      { label: 'Santo Domingo Norte', value: 'Santo Domingo Norte' },
      { label: 'Santo Domingo Oeste', value: 'Santo Domingo Oeste' },
      { label: 'Santiago', value: 'Santiago' },
    ],
  },
  {
    label: 'Zonas Turísticas',
    code: 'TO',
    items: [
      { label: 'Bávaro, Punta Cana y la Altagracia', value: 'Bávaro' },
      { label: 'La Romana', value: 'La Romana' },
      { label: 'Puerto Plata', value: 'Puerto Plata' },
      { label: 'Samaná', value: 'Samaná' },
      { label: 'San Pedro de Macorís', value: 'San Pedro de Macorís' },
    ],
  },
  {
    label: 'Otras Zonas',
    code: 'OZ',
    items: [
      { label: 'Azua', value: 'Azua' },
      { label: 'Bahoruco', value: 'Bahoruco' },
      { label: 'Barahona', value: 'Barahona' },
      { label: 'Dajabón', value: 'Dajabón' },
      { label: 'Duarte', value: 'Duarte' },
      { label: 'El Seibo', value: 'El Seibo' },
      { label: 'Elías Piña', value: 'Elías Piña' },
      { label: 'Espaillat', value: 'Espaillat' },
      { label: 'Hato Mayor', value: 'Hato Mayor' },
      { label: 'Independencia', value: 'Independencia' },
      { label: 'La Vega', value: 'La Vega' },
      { label: 'Monte Cristi', value: 'Monte Cristi' },
      { label: 'Pedernales', value: 'Pedernales' },
    ],
  },
]

const FilterProperties = ({ filters, updateFilters }: any) => {
  const { t } = useTranslation()
  const [bathroomCount, setBathroomCount] = useState<number>(
    filters.bathMin || 1
  )
  const [roomCount, setRoomCount] = useState<number>(filters.bedMin || 1)
  const [floors, setFloors] = useState<any>([
    filters.floorMin,
    filters.floorMax,
  ])
  const [price, setPrice] = useState<any>([filters.priceMin, filters.priceMax])
  const [size, setSize] = useState<any>([filters.sizeMin, filters.sizeMax])
  const [zone, setZone] = useState<string>(filters.zone || '')
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    updateFilters('bathMin', bathroomCount)
    updateFilters('bedMin', roomCount)
    updateFilters('priceMin', price[0])
    updateFilters('priceMax', price[1])
    updateFilters('floorMin', floors[0])
    updateFilters('floorMax', floors[1])
    updateFilters('sizeMin', size[0])
    updateFilters('sizeMax', size[1])
    updateFilters('features', [])
    updateFilters('propertyType', '')
    updateFilters('zone', zone)
  }, [bathroomCount, price, size, floors, zone])

  const handleSelectPropertyType = (type: string) => {
    setSelectedPropertyType(type)
    updateFilters('propertyType', type)
  }

  const handleSelectFeature = (features: string[]) => {
    setSelectedFeatures(features)
    updateFilters('features', features)
  }
  const incrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    setter(value + 1)
  }

  const decrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => {
    if (value > min) {
      setter(value - 1)
    }
  }

  const footerContent = (
    <div>
      {/* <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus /> */}
    </div>
  )

  return (
    <div className='shadow-md rounded-lg p-4 space-y-12 min-h-[60vh] '>
      <InputNumber
        placeholder='Codigo de propiedad'
        className='w-full !h-[30px]'
        value={filters.code}
        onChange={(e) => updateFilters('code', e.value)}
      />
      <PropertyTypeSelector
        selectedType={selectedPropertyType}
        onSelectType={handleSelectPropertyType}
      />
      {/* Zonas Dropdown */}
      <div className='border border-zinc-500 rounded-lg p-1'>
        <Dropdown
          value={zone}
          onChange={(e) => setZone(e.value)}
          options={zones}
          optionLabel='label'
          optionGroupLabel='label'
          optionGroupChildren='items'
          placeholder='Selecciona una zona'
          className='w-full'
          filter
        />
      </div>
      {/* PRICE */}
      <div>
        <h4 className='text-lg uppercase mb-4'>
          {t('properties.filters.price')}
          (${price[0].toLocaleString()} - ${price[1].toLocaleString()})
        </h4>
        <Slider
          value={price}
          onChange={(e) => setPrice(e.value)}
          range
          min={20000}
          max={10000000}
        />
      </div>

      {/* BATHROOMS */}
      <div className='flex items-center justify-between'>
        <h4 className='text-lg uppercase '>
          {t('properties.filters.bathrooms')}
        </h4>
        <div className='flex items-center gap-8'>
          <div className='flex items-center space-x-4 relative'>
            <label className='absolute -top-5 left-[55%] text-xs -translate-x-1/2'>
              Desde
            </label>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
              onClick={() => {
                if (filters.bathMin === 1) return
                updateFilters('bathMin', filters.bathMin - 1)
              }}
            >
              -
            </button>
            <span className='text-xl'>{filters.bathMin}</span>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border'
              onClick={() => {
                if (filters.bathMin === filters.maxBath) return
                updateFilters('bathMin', filters.bathMin + 1)
              }}
            >
              +
            </button>
          </div>
          <div className='flex items-center space-x-4 relative'>
            <label className='absolute -top-5 left-[55%] text-xs -translate-x-1/2'>
              Hasta
            </label>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border'
              onClick={() => {
                if (filters.bathMax === filters.minBath) return
                updateFilters('bathMax', filters.bathMax - 1)
              }}
            >
              -
            </button>
            <span className='text-xl'>{filters.bathMax}</span>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border'
              onClick={() => {
                if (filters.bathMax > 10) return
                updateFilters('bathMax', filters.bathMax + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* HABITACIONE */}
      <div className='flex items-center justify-between'>
        <h4 className='text-lg uppercase '>HABITACIONES</h4>
        <div className='flex items-center gap-8'>
          {/* MIN */}
          <div className='flex items-center space-x-4 relative'>
            <label className='absolute -top-5 left-[55%] text-xs -translate-x-1/2'>
              Desde
            </label>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
              onClick={() => {
                if (filters.bedMin === 1) return
                updateFilters('bedMin', filters.bedMin - 1)
              }}
            >
              -
            </button>
            <span className='text-xl'>{filters.bedMin}</span>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
              onClick={() => {
                if (filters.bedMin === filters.bedMax) return
                updateFilters('bedMin', filters.bedMin + 1)
              }}
            >
              +
            </button>
          </div>
          {/* MAX */}
          <div className='flex items-center space-x-4 relative'>
            <label className='absolute -top-5 left-[55%] text-xs -translate-x-1/2'>
              Hasta
            </label>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
              onClick={() => {
                if (filters.bedMax === filters.bedMin) return
                updateFilters('bedMax', filters.bedMax - 1)
              }}
            >
              -
            </button>
            <span className='text-xl'>{filters.bedMax}</span>
            <button
              className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
              onClick={() => {
                if (filters.bedMax > 15) return
                updateFilters('bedMax', filters.bedMax + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className='text-lg font-semibold pb-5'>Features</span>
        <PropertyFeaturesSelector
          selectedFeatures={selectedFeatures}
          onSelectFeature={handleSelectFeature}
        />
      </div>

      {/* SIZE */}
      <div>
        <h4 className='text-lg uppercase mb-4'>
          {t('properties.filters.size')} (Desde {size[0]} m² - Hasta {size[1]}{' '}
          m²)
        </h4>
        <div className='flex gap-4'>
          {/* Input para el tamaño mínimo */}
          <InputText
            value={size[0]}
            onChange={(e) => {
              const minSize = Number(e.target.value)
              if (minSize <= size[1]) {
                setSize([minSize, size[1]])
                updateFilters('sizeMin', minSize)
              }
            }}
            placeholder='Desde m²'
            className='p-2 border rounded-lg w-full bg-white text-black focus:bg-white'
            type='number'
            min={1}
          />
          {/* Input para el tamaño máximo */}
          <InputText
            value={size[1]}
            onChange={(e) => {
              const maxSize = Number(e.target.value)
              if (maxSize >= size[0]) {
                setSize([size[0], maxSize])
                updateFilters('sizeMax', maxSize)
              }
            }}
            placeholder='Hasta m²'
            className='p-2 border rounded-lg w-full bg-white text-black focus:bg-white'
            type='number'
            min={1}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterProperties
