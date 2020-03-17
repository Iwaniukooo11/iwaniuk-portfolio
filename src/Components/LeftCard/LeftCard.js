import React from "react"
import Desc from "../Desc/Desc"
import styled from "styled-components"

const Card = styled.section`
  width: 37%;
  /* min-height: 100vh; */
  display: none;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color_theme_a},
    ${({ theme }) => theme.color_theme_b}
  );
  color: ${({ theme }) => theme.color_white};

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  @media (min-width: 1200px) {
    width: 450px;
  }
`

const List = styled.ul`
  display: grid;
  row-gap: 15px;
  padding: 0 0 80px 20px;
`
const Element = styled.li`
  display: grid;
  grid-template-areas: "bold" "desc";
`
const Bold = styled.b`
  grid-area: bold;
`

const LeftCard = props => {
  console.log(props)
  return (
    <Card>
      <List>
        {props.content.contact.data.map(el => (
          <Element key={el.key}>
            <Bold>{el.key}</Bold>

            <Desc white>{el.value}</Desc>
          </Element>
        ))}
      </List>
    </Card>
  )
}

export default LeftCard
