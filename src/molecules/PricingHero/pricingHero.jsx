import styled from "styled-components";

export const PricingHeroWrapper = styled.section`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30rem;
  padding-top: 4rem;

  .hero-desc{
    width: 59rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .btn-cont{
      
      display: flex;
      justify-content: space-between;
    }
  }
`