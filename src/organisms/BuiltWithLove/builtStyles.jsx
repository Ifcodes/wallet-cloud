import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 7.5rem 0;
  padding: 0 3rem;

  .codeBox-cont{
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
  }

  .description-cont{
    margin-left: 3rem;
  }

  .icons-wrapper{
    margin: 2rem 0 4rem;
    display: flex;
    cursor: pointer;

    .icon-cont{
      width: 7.5rem;
      height: 7.5rem;
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.05);
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .isActive{
    border: 1px solid ${props => props.theme.colors.primary}
  }



  .btn-cont{
    display: flex;
    margin: 2rem 0;
  }
`