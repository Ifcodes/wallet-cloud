import styled from "styled-components";

export const PricingSectionWrapper = styled.section`
  width: 100%;
  height: 38rem;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.greyBg};
  position: relative;
  
  .cards-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35rem;
    position: absolute;
    top: -7rem;
    z-index: 10;
  }

  .cards-cont{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`