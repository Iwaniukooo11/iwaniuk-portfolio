import React, { useState } from "react"
import styled from "styled-components"
const Input = styled.input`
  /* width: ${props => (props.small ? "50%" : "100%")}; */
  width:100%;
  border: none;
  opacity: 0.65;
  transition: 0.3s;
  text-overflow:ellipsis;
  overflow:hidden;
  background-color:transparent;
  &:focus {
    border: none;
    opacity: 1;
  }
  &:invalid{
      box-shadow:none;
  }
`
const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.color_theme_b};
  font-weight: bold;
  &::after {
    content: ":";
  }
  @media (min-width: 960px) {
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color_theme_a};
  transform: translateX(-75%) translateY(-1px);
  transition: 0.3s;
  &.active {
    transform: none;
    /* background-color: ${({ theme }) => theme.color_theme_a} !important; */
  }
  &.error {
    background-color: red;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  /* width: ${props => (props.small ? "40%" : "100%")}; */
  width:100%;
  margin: 10px;
  position:relative;
  @media(min-width:768px){
  width: ${props => (props.small ? "40%" : "100%")};
  }
`

const FullInput = props => {
  const [inputValue, setInputValue] = useState("")
  const clickEvent = e => {
    props.onChange(e)
    setInputValue(e.target.value)
  }
  return (
    <Container small={props.small}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        as={props.as ?? ""}
        type={props.type}
        id={props.id}
        name={props.id}
        maxLength={props.max || ""}
        value={props.state[props.id] || ""}
        // onInput={e => setInputValue(e.target.value)}
        onInput={e => clickEvent(e)}
        // onChange={e => clickEvent(e)}
        rows={props.rows ?? ""}
      />
      <Line
        className={`${props.state[props.id] && "active"}
         ${props.invalid == props.id && "error"}`}
      />
    </Container>
  )
}

export default FullInput
