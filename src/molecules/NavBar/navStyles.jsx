import styled from "styled-components";

export const NavWrapper = styled.nav`
  background-color: ${props => props.greenBg ? props.theme.colors.primary : "white"};
  height: 4rem;
  display: flex;
  gap: 1rem;
  padding: 0 6rem;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;

  .nav-item-cont{
    display: flex;
  }

  .login-cont{
    width: 15rem;
    display: flex;
    align-items: center;
    
    .login-text{
      color: ${props => !props.greenBg ? props.theme.colors.primary : "white"};
      margin-right: 1rem;
    }
    .login-text:hover{
      font-weight: 600;
    }
  }

  .nav-item{
    cursor: pointer;
    color: ${props => props.greenBg ? "rgba(255, 255, 255, 0.6)" : "black"};
    margin: 0 1rem;
    text-align: center;
  }

  .nav-item:hover{
    font-weight: 600;
  }

  .isActive{
    color: ${props => props.greenBg ? "white" : props.theme.colors.primary};
    font-weight: 600;
  }
`