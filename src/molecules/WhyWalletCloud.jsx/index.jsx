import React from 'react'
import AlternativeButton from '../../atoms/Button/AlternativeButton'
import { HeadingDescription, Headings } from '../../atoms/Typography'
import { WhyWalletWrapper } from './whyWalletStyles'

const WhyWalletCloud = () => {
  const listItems = [
    {
      number: "01",
      content: "Fast connection to the blockchain"
    },
    {
      number: "02",
      content: "Secured endpoint for transactions"
    },
     {
      number: "03",
      content: "Notification for every transactions"
    },
  ]
  return (
    <WhyWalletWrapper>
      <div className='title-cont'>
        <Headings>Why WalletCloud?</Headings>
        <HeadingDescription>WalletCloud is a blockchain wallet service provider which enable client apps connect to our secured service and seamlessly carry out transactions.</HeadingDescription>
      </div>
      <div className='list-cont'>
        {listItems.map((item, index) => (
          <div key={`listItem-${index}`} className='item-cont'>
            <span>{item.number}.</span>
            <div className='content'>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='alternative'>
        <AlternativeButton />
      </div>
    </WhyWalletWrapper>
  )
}

export default WhyWalletCloud