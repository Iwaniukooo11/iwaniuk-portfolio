import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Burger from "../Burger/Burger"

const StyledBurger = styled(Burger).attrs(props => ({
  //   class: props.className,
}))`
  position: fixed;
  top: 3%;
  left: 3%;
`

const Nav = styled.nav`
  position: fixed;
  left: 0%;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (!props.isActive ? "translateX(-100%)" : null)};
  transition: 0.3s;
  z-index: 1;
  box-sizing: content-box;
  background-color: ${({ theme }) => theme.color_white};
  @media (min-width: 768px) {
    transform: none;
    height: auto;
    width: auto;
    left: auto;
    right: 10%;
    background-color: transparent;
    padding: 18px 0;
  }
`
const List = styled.ul`
  display: grid;
  justify-items: center;
  row-gap: 10px;
  @media (min-width: 768px) {
    display: flex;
  }
`
const Element = styled.li`
  color: ${({ theme }) => theme.color_theme_b};
  font-size: 18px;
  margin: 0 10px;
  @media (min-width: 768px) {
    color: ${({ theme }) => theme.color_dark};
  }
  .active {
    color: ${({ theme }) => theme.color_theme_a};
    font-weight: bold;
  }
`

const Navigation = props => {
  const [isActive, setIsActive] = useState(false)
  console.log(isActive)

  return (
    <>
      <StyledBurger
        onClick={() => setIsActive(!isActive)}
        className={isActive ? "is-active" : null}
      />
      <Nav isActive={isActive}>
        <List>
          {props.content.navigation.data.map(el => (
            <Element>
              <Link to={`/${el.value}`} activeClassName="active">
                {el.key}
              </Link>
            </Element>
          ))}
        </List>
      </Nav>
    </>
  )
}

export default Navigation
