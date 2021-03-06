import styled from "styled-components"

const Header = styled.h1`
  font-size: ${props => (props.small ? "23px" : "32px")};
  word-spacing: 5px;
  margin-bottom: ${props => (!props.noMargin ? "25px" : "")};
  grid-area: header;
  text-transform: uppercase;
  color: ${props => props.theme[props.color] || props.theme.color_dark};
  animation: ${props => (props.animate ? "animation 1s" : null)};

  &:hover {
    cursor: ${props => (props.hover ? "pointer" : null)} !important;
  }

  @media (min-width: 960px) {
    font-size: ${props => (props.small ? "26px" : "40px")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.small ? "29px" : "48px")};
  }
`

export default Header
