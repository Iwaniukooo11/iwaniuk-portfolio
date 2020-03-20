import React, { useState } from "react"
import styled from "styled-components"

import { Collapse } from "reactstrap"
import Desc from "../../Components/Desc/Desc"
import Header from "../../Components/Header/Header"

const Container = styled.article`
  display: grid;
  grid-template-areas: "wrap" "collapse";
  width: 100%;
  /* margin: 15px 0; */
  @media (min-width: 1200px) {
    margin: 5px 0;
  }
`
const Button = styled.i`
  grid-area: button;
  color: ${({ theme }) => theme.color_theme_a};
  font-size: 26px;
  margin-right: 20px;
  /* transform-origin: 50% 50%; */
  &:hover {
    cursor: pointer;
  }
  &.active {
    transform: rotate(90deg);
    transition: 0.5s;
  }
  @media (min-width: 960px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 34px;
  }
`
const StyledCollapse = styled(Collapse)`
  grid-area: collapse;
  padding-bottom: 15px;
  grid-template-areas: "desc" "images";
`
const TextWrap = styled.div`
  /* display: Flex;
  justify-content: space-between; */
  display: grid;
  grid-area: wrap;
  grid-template-areas: "button header";
  align-items: center;
  grid-template-columns: auto 1fr;
  margin-bottom: 15px;
`

const Img = styled.img`
  width: 250px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin: 15px 20px;
  box-shadow: 10px 0 35px rgba(75, 97, 157, 0.65);
  /* box-shadow: 10px 0 35px rgba(16, 164, 166, 0.5); */
  @media (min-width: 1200px) {
    width: 200px;
    height: 96px;
    /* margin: 3px 20px; */
    margin: 20px 0;
  }
`
const ImagesWrap = styled.div`
  grid-area: images;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
  /* padding:20px 0; */
`

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <TextWrap>
        <Button
          className={`fas fa-caret-right ${isOpen && "active"}`}
          onClick={toggle}
        ></Button>
        <Header as={"h2"} color={"color_theme_a"} small onClick={toggle}>
          {props.header}
        </Header>
      </TextWrap>

      <StyledCollapse isOpen={isOpen}>
        <Desc>{props.desc}</Desc>
        <ImagesWrap>
          {props.images.map(obj => (
            <Img key={obj} alt={"gallery image"} src={obj} />
          ))}
        </ImagesWrap>
      </StyledCollapse>
    </Container>
  )
}

export default Example
