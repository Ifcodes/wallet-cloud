import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: ${props => props.theme.colors.greyBg};
  display: flex;
  justify-content: space-between;
  padding: 4rem 6.25rem 0;
  z-index: 10;

  

  .links-cont-wrapper{
    display: flex;
    /* justify-content: space-between; */
    gap: 12rem;

    .links-cont{
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a{
        margin-bottom: 1rem;
        color: ${props => props.theme.colors.greyText};
      }
    }
  }
`