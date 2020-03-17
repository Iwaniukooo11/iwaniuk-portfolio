import styled from "styled-components"

const Desc = styled.p.attrs(props => ({
  className: "desc",
}))`
  font-size: 16px;
  max-width: 440px;
  color: ${props =>
    props.white
      ? ({ theme }) => theme.color_white
      : ({ theme }) => theme.color_dark};

  grid-area: desc;
  @media (min-width: 960px) {
    font-size: 17px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`

export default Desc
