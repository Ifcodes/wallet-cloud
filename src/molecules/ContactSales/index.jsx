import React from 'react'
import Button from '../../atoms/Button'
import { Headings } from '../../atoms/Typography'
import CheckIconWhite from '../../atoms/vectors/CheckIconWhite'
import { ContactSalesWrapper } from './contactStyles'

const ContactSales = () => {
  const planDescription = [
    "Unlimited API Requests per Day",
    "Unlimited Webhook Notifications per Day",
    "Unlimited Wallets per Organization"
  ]
  return (
    <ContactSalesWrapper>
      <div className='plan-section'>
        <span className='plan-intro'>
          If you’d like a custom plan, or;
        </span>
        <div className='plans-wrapper'>
          {planDescription.map((plan, index) => (
            <div key={`pln-key-${index}`} className='plan'>
              <CheckIconWhite />
              <span>{plan}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='cta-cont'>
        <p className="plan-intro">
          Speak to sales team
        </p>
        <Headings color="white" margin={"0"}>
          +234 812 222 2222
        </Headings>
        <div className="cta">
          <p>Want to take a test drive? to know which plan is right for you?</p>
          <button className='book-a-demo'>
            Book a demo
          </button>
        </div>
      </div>
    </ContactSalesWrapper>
  )
}

export default ContactSales