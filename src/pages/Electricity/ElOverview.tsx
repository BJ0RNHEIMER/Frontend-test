import ElectricityPerRecievedWater from '@/components/SydvattenKPI/ElectricityPerRecievedWater'
import React from 'react'
import { locationById } from '@/data/locations'

const ElOverview = () => {
  return (
     <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:gap-6">
          <div>
            <ElectricityPerRecievedWater location={locationById.ringsjon} />
            <ElectricityPerRecievedWater location={locationById.vomb} />
            <ElectricityPerRecievedWater location={locationById.bolmen} />

          </div>
        
        </div>
    
  )
}

export default ElOverview