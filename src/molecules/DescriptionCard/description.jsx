import styled from "styled-components"

export const DescriptionWrapper = styled.div`
  width: ${props => props.width || ''};

  .title-cont{
    h1{
      font-size: ${props => props.heroSection ? "3.5rem" : "3rem"};
      font-weight: 600;
      margin: 0;
    }
  }

  .desc{
    margin-top: ${props => !props.footerSection ? "2rem" : "1.3125rem"};
    color: ${props => props.theme.colors.greyText};
    font-size: 0.875rem;
  }

  .cta-cont{
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }
`