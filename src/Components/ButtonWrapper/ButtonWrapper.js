import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;
  grid-area: button-wrapper;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export default Wrapper
