import styled from "styled-components"

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8125rem;
  padding: 0.9375rem 1.875rem;
  background-color: ${props => props.bgColor ? props.bgColor : !props.greenBg ? props.theme.colors.primary : "white" };
  color: ${props => props.color ? props.color : props.greenBg ? props.theme.colors.primary : "white"};
  border: ${props => props.hasBorder ? `1px solid ${props.theme.colors.primary}` : 'none'};
  margin-right: ${props => props.mr || "1.5rem"};
  font-weight: 600;
  cursor: pointer;

  .play-icon{
    display: ${props => props.otherButton ? "flex" : "none"};
  }

  &:hover{
    background-color: ${props => !props.greenBg ? "white" : props.theme.colors.primary};
    color: ${props => !props.greenBg ? props.theme.colors.primary : "white"};
    border: ${props => !props.greenBg && !props.otherButton ? `1px solid ${props.theme.colors.primary}` : '1px solid white'};
    transition: 0.1s ease-in-out;
  }
`
export const AlternativeBtnWrapper = styled(ButtonWrapper)` 
  background-color: transparent;
  color: ${props => props.theme.colors.grey1};
  padding: 2rem 0;

  &:hover{
    border: none;
  }
`