import React from 'react'
import { HeadingDescription, TitleText } from '../../atoms/Typography'
import AssetIcon from '../../atoms/vectors/AssetIcon'
import NetworkIcon from '../../atoms/vectors/NetworkIcon'
import Description from '../../molecules/DescriptionCard'
import { ApiSectionWrapper } from './styles'
import { ServiceCardWrapper } from './styles'

const ServicesCard = ({icons, title, description}) => {
  return (
    <ServiceCardWrapper>
      <div>{icons}</div>
      <div className='services-cont'>
        <TitleText color="#219653">{title}</TitleText>
        <HeadingDescription>{description}</HeadingDescription>
      </div>
    </ServiceCardWrapper>
  )
}

const ApiDescriptionSection = () => {

  return (
    <ApiSectionWrapper>
      <div className='containers'>
        <Description 
          Title={(
            <h1>WalletCloud API</h1>
          )}
          description="Connect securely to our service to send transactions to the blockchain network without having to do the heavy lifting of managing blockchain nodes or wallet"
          width={"70%"}
        />
      </div>
      <div className='service-card'>
          <ServicesCard 
            icons={(
              <NetworkIcon />
            )}
            description={"WalletCloud provides support for the Ethereum Mainnet and Rinkeby Testnet"}
            title={"Networks"}
          />
           <ServicesCard 
            icons={(
              <div>
                <AssetIcon />
              </div>
            )}
            description={"WalletCloud provides support for sending and recieving the assets listed in the table below on the Ethereum Mainnet and Testnet. Support for more assets will be added subsequently"}
            title={"Assets Management"}
          />
      </div>
    </ApiSectionWrapper>
  )
}

export default ApiDescriptionSection