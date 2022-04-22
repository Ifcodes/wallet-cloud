import React from 'react'
import { Headings } from '../../atoms/Typography'
import BuildSpaceLogo from '../../atoms/vectors/BuildSpaceLogo'
import MetaDropLogo from '../../atoms/vectors/MetaDropLogo'
import PolygonLogo from '../../atoms/vectors/PolygonLogo'
import SequoiaLogo from '../../atoms/vectors/SequoiaLogo'
import YcombinatorLogo from '../../atoms/vectors/YcombinatorLogo'
import { TrustedPartnersWrapper } from './trustedStyles'

const TrustedPartners = () => {
  return (
    <TrustedPartnersWrapper>
      <Headings>Our Trusted Partners</Headings>
      <div>
        <MetaDropLogo />
        <BuildSpaceLogo />
        <YcombinatorLogo />
        <PolygonLogo />
        <SequoiaLogo />
      </div>
    </TrustedPartnersWrapper>
  )
}

export default TrustedPartners