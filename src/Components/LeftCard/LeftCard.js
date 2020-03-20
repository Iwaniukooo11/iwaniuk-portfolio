import React from "react"
import Desc from "../Desc/Desc"
import styled from "styled-components"
import socials from "../../utils/socials"

const Card = styled.section`
  width: 37%;
  display: none;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
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

const Icon = styled.i`
  font-size: 23px;
  margin-right: 20px;
  transition: 0.3s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
const IconWrap = styled.div`
  margin-top: 10px;
  grid-area: "desc";
  display: flex;
  /* justify-content: space-evenly; */
`

const LeftCard = props => {
  return (
    <Card>
      <List>
        {props.content.contact.data.map(el => (
          <Element key={el.key}>
            <Bold>{el.key}</Bold>
            <Desc white>{el.value}</Desc>
          </Element>
        ))}
        <Element>
          <Bold>Znajdź mnie:</Bold>
          <IconWrap>
            {socials.map(el => (
              <a href={el.link} target="_blank" key={el.link}>
                <Icon className={el.icon} />
              </a>
            ))}
          </IconWrap>
        </Element>
      </List>
    </Card>
  )
}

export default LeftCard
