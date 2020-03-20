import React from "react"
import styled from "styled-components"

const Button = styled.button`
  z-index: 5;

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: ${({ theme }) => theme.color_theme_a};
  }
  &.is-active {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: ${({ theme }) => theme.color_theme_b} !important;
    }
  }
  @media (min-width: 768px) {
    display: none !important;
  }
`

const Burger = props => {
  return (
    <Button
      onClick={props.onClick}
      className={`hamburger hamburger--collapse ${props.className}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Button>
  )
}

export default Burger
