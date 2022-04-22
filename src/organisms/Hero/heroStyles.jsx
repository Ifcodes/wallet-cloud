import styled from "styled-components"

export const HeroWrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  
  
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
    align-items: flex-end;
    width: 90%;

    .alt-cont{
      width: 31rem; 
      justify-content: flex-start;
    }
  }
`