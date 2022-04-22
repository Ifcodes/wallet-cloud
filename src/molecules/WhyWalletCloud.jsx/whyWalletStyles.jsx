import styled from "styled-components";

export const WhyWalletWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  .title-cont{
    width: 85%;
    margin-left: 2.1rem;
  }

  .list-cont{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .item-cont{
      display: flex;
      align-items: center;
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      margin-top: 1rem;
      transition: bottom 0.5s ease-in-out;

      .content{
        padding: 3.5rem ;
        width: 90%;
        box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.1);
        margin-left: 1rem;
      }
    }
  }

  .alternative{
    margin: 1.5rem 2.7rem 0;

  }
`