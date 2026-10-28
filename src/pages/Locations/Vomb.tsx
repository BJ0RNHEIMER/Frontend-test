import LocationCard from '@/components/sydvattenKPI/LocationCard'
import { locationById } from '@/data/locations'
import LatestFlowCard from '@/components/sydvattenKPI/LatestFlowCard'
import VattenNivaCard from '@/components/sydvattenKPI/VattenNivaCard'
import ElectricityPerRecievedWater from '@/components/sydvattenKPI/ElectricityPerRecievedWater'

const Vomb = () => {
  const thisLocation = locationById.vomb
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">Vomb</h4> 
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      
        <VattenNivaCard location ={thisLocation}/>
        
        <LatestFlowCard location ={thisLocation} />
    
        <ElectricityPerRecievedWater location={thisLocation}/>
    </div>
    </div>
  )
}

export default Vomb