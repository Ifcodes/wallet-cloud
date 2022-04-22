import styled from "styled-components"

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 0 5rem 0;
  
  
  .img-cont{
    width: 100%;
    height: 76.7%;
    display: flex;
    object-fit: contain;
    place-items: center;

    img{
      width: 90%;
      height: 90%;
    }
  }

  .description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .alt-cont{
      width: 31rem; 
      justify-content: flex-start;
    }
  }
`