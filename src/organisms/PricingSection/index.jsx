import PriceCard from '../../molecules/PriceCard'
import { PricingSectionWrapper } from './pricingStyles'
import ContactSales from '../../molecules/ContactSales'

const PricingSection = ({priceData, isYearly, errorMessage}) => {
  const emptyData = Array(3).fill("")
  const dataToMap = priceData.length > 0 ? priceData : emptyData
  return (
    <PricingSectionWrapper>
      <div className='cards-wrapper'>
        <div className='cards-cont'>
          {dataToMap.map((data, index) => (
            <PriceCard 
              key={`data-key-${index}`}
              cardData={data} 
              isYearly={isYearly}
              errorMessage={errorMessage}
            />
          ))}
        </div>
       <ContactSales />
      </div>
    </PricingSectionWrapper>
  )
}

export default PricingSection