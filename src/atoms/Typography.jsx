import styled from "styled-components";

export const TitleText = styled.h3`
  font-size: ${props => props.fs || "1rem"};
  color: ${props => props.color ||"#333333"};
`
export const Headings = styled.h1`
  font-size: ${props => props.fs || "3rem"};
  color: ${props => props.color || "#333333"};
  margin: ${props => props.margin || ''};
`

export const HeadingDescription = styled.span`
  margin-top:  1.3125rem;
  color: ${props => props.theme.colors.greyText};
  font-size: 0.875rem;
`