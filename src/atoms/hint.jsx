import React from 'react'
import styled from 'styled-components'

const HintWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.875rem;
  background-color: white;
  padding: 0.5rem ;
  border: 10px solid ${props => props.theme.colors.primary};

  span{
    color: #F2C94C;
    font-weight: 600;
  }
`

const RecommendedHint = () => {
  return (
    <HintWrapper>
      <span>Most Recommended</span>
    </HintWrapper>
  )
}

export default RecommendedHint