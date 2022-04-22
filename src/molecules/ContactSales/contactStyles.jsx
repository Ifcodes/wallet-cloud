import styled from "styled-components"

export const ContactSalesWrapper = styled.section`
  width: 89%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  align-items: center;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.primary};

  .plan-intro{
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
  }

  .plans-wrapper{
    display: flex;
    flex-direction: column;

    .plan{
      display: flex;
      align-items: center;
      margin-top: 1rem;

      span{
        margin-left: 1rem;
        color: white;
      }
    }
  }
  
  .plan-section{
    width: 40%;
  }

  .cta-cont{
    width: 43%;
  }

  .cta{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    
    p{
      width: 18rem;
      margin-right: 2rem;
    }

    .book-a-demo{
      border: none;
      background-color: white;
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
      height: 3rem;
      padding: 0 2rem;
      cursor: pointer;
    }

    .book-a-demo:hover{
      background-color: ${props => props.theme.colors.primary};
      color: white;
      border: 1px solid white;
      transition: 0.3s ease-in-out;
    }
  }
`