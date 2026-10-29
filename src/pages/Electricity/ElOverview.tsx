import ElectricityConsum from '@/components/SydvattenKPI/ElectricityConsum'
import React from 'react'
import { electricityDataById } from '@/data/electricityData'

const ElOverview = () => {
  return (
     <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:gap-6">
          <div>
            <ElectricityConsum electricityData={electricityDataById.ringsjoverket} />
            <ElectricityConsum electricityData={electricityDataById.ringsjoholmPump} />
            <ElectricityConsum electricityData={electricityDataById.vombverket} />

          </div>
        
        </div>
    
  )
}

export default ElOverview