import styled from "styled-components"

const Header = styled.h1`
  font-size: ${props => (props.small ? "23px" : "32px")};
  word-spacing: 5px;
  /* color: ${({ theme }) => theme.color_dark}; */
  grid-area:header;
  text-transform: uppercase;
  color: ${props => props.theme[props.color] || props.theme.color_dark};
`

export default Header
