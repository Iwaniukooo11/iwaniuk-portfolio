import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Button = styled(Link)`
  font-size: 17px;
  border-radius:5px;
  margin:5px 0;
  color: ${({ theme }) => theme.color_white};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 7px 15px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color_theme_a},
    ${({ theme }) => theme.color_theme_b}
  );
  /* -webkit-border-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color_theme_a},
    ${({ theme }) => theme.color_theme_b}
  ); */
  border-width: 1px;
  border-style: solid;
  border-color:transparent;
  &.empty {
    background-image: none;
    background-color: transparent;
    border-color:${({ theme }) => theme.color_theme_a};
    color: ${props =>
      props.white ? props.theme.color_white : props.theme.color_theme_c};
  }
  &.white-bord{
    border-color:${props => props.theme.color_white};
  }
  @media(min-width:768px){
    /* margin:0 10px; */
    &.pos-right{
      margin-left:10px;
    }
    &.pos-left{
      margin-right:10px;
    }
  }
  @media(min-width:960px){
    /* margin:0 10px; */
    border-width:2px;

    &.pos-right{
      margin-left:20px;
    }
    &.pos-left{
      margin-right:20px;
    }
  }
  margin:${props => (props.center ? "10px auto" : null)};
  
`

const ButtonFC = props => {
  return (
    <Button
      className={[
        props.empty && "empty",
        props.bord_white && "white-bord",
        props.pos ?? "",
      ].join(" ")}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default ButtonFC
