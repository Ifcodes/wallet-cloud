import styled from "styled-components";

export const ApiSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  background-color: ${props => props.theme.colors.greyBg};
  margin: 4.6rem 0 0;

  .containers{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
  }
  .service-card{
    margin-top: 2rem;
  }
`
export const ServiceCardWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  .services-cont{
    margin-left: 2rem;
  }
  
`