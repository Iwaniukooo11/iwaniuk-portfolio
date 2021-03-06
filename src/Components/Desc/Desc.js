import styled from "styled-components"

const Desc = styled.p.attrs(props => ({
  className: "desc",
}))`
  font-size: 16px;
  max-width: 630px;
  line-height: 1.7;
  color: ${props =>
    props.white
      ? ({ theme }) => theme.color_white
      : ({ theme }) => theme.color_dark};

  animation: ${props => (props.animate ? "animation 1s" : null)};
  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 960px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 19px;
  }
`

export default Desc
