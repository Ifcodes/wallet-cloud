import React from 'react'
import styled from 'styled-components'

const LoaderParent = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  border: 8px solid ${props => props.theme.colors.greyBg};
  border-top: 8px solid ${props => props.theme.colors.primary};
  position: relative;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`
const Loader = () => {
  return (
    <LoaderParent>
    </LoaderParent>
  )
}

export default Loader