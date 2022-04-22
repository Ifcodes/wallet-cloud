import React from 'react'
import Button from '../../atoms/Button'
import { DescriptionWrapper } from './description'

const Description = ({
  Title,
  description,
  width,
  cta,
  secondaryCta,
  footerSection,
  heroSection,
}) => {
  return (
    <DescriptionWrapper 
      footerSection={footerSection}
      heroSection={heroSection}
      width={width}
    >
      <div className='title-cont'>
        {Title}
      </div>
      <div className='desc'>
        <span>{description}</span>
      </div>
      {cta && 
         (
          <div className='cta-cont'>
            <Button buttonText={cta.text}/>
            {secondaryCta && (
              <Button buttonText={secondaryCta} greenBg otherButton />
            )}
          </div>
         )
      }
    </DescriptionWrapper>
  )
}

export default Description