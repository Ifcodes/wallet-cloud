import React from 'react'
import { TitleText } from '../../atoms/Typography'
import WalletCloudLogo from '../../atoms/WalletCloudLogo'
import Description from '../../molecules/DescriptionCard'
import { FooterWrapper } from './footerStyles'
import { Link } from 'react-router-dom'

const Footer = () => {
  const companyLinks = ["Home", "Products", "Documentation", "Contact us"]
  const supportLinks = ["Documentation", "Security", "FAQs", "Privacy Policy"]

  return (
    <FooterWrapper>
      <Description 
        Title={(
          <WalletCloudLogo />
        )}
        description="Connect to our blockchain wallet service and seamlessly carry out transactions. Securely initiate crypto transactions, and store them with one simple integration."
        width="19.6rem"
        cta={{text: 'Get the API'}}
        footerSection
      />
      <div className='links-cont-wrapper'>
        <div>
          <TitleText>Company</TitleText>
          <div className='links-cont'>
            {companyLinks.map((link, index) => (
              <Link
                to={'#'}
                key={`link-key-${index}`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <TitleText>Support</TitleText>
          <div className='links-cont'>
            {supportLinks.map((link, index) => (
              <Link
                to={'#'}
                key={`link-keys-${index}`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer