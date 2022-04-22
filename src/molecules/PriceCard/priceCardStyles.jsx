import styled from "styled-components";

export const PriceCardWrapper = styled.div`
  padding: 1rem 2rem;
  position: relative;
  background-color: white;
  height: 35rem;
  width: 28%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.emptyPage && "center"};
  align-items: ${props => props.emptyPage && "center"};

  .error{
    text-align: center;
  }

  &:hover{
    box-shadow: 0 1px 5px rgba(33, 150, 83, 0.3);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .title{
    margin-top: 2rem;
  }

  .price-cont{
    display: flex;
    align-items: flex-end;

    span{
      font-size: 3rem;
      color: rgba(0, 0, 0, 0.3);
      font-weight: 600;
      margin-left: 1rem;
    }
  }

  .price{
    font-size: 3rem;
    margin: 0;
  }

  .hint-cont{
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: -1rem  ;
  }

  .btn{
    width: 100%;
    padding: 1rem 0;
    font-weight: 600;
    margin: 1rem 0;
    cursor: pointer;
  }

  
  .free{
    border: 1px solid rgba(33, 150, 83, 0.3);
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }

  .free:hover{
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: 1px solid white;
    transition: 0.3s ease-in-out;
  }
  
  .paid{
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
  
  .paid:hover{
    background-color: white;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    transition: 0.3s ease-in-out;
  }

  .feat-cont{
    margin: 2.3rem 0;
  }

  .feat{
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1.7rem 0;

    /* span{
      margin-left: 1rem;
    } */
  }
`