import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"
import emailjs from "emailjs-com"
// import { userID } from "../utils/apikeys"
import content from "../utils/content"

const Container = styled.form`
  grid-area: inputs;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

console.log(`${process.env.GATSBY_APP_USER_ID}`)
console.log(`${process.env.NODE_ENV}`)

const Contact = props => {
  const [state, setState] = useState({})
  const [isSent, setIsSent] = useState(false)

  const changeHandlder = e => {
    state[e.target.id] = e.target.value
    setState(state)
  }
  const send = e => {
    e.preventDefault()
    emailjs.init(`${process.env.GATSBY_APP_USER_ID}`)
    console.log(e.target)
    emailjs
      .sendForm(
        "gmail",
        "template_IXjcBTfO",
        e.target,
        `${process.env.GATSBY_APP_USER_ID}`
      )
      .then(
        result => {
          console.log(result.text)
          setState({})
          setIsSent(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  const SendInfo = styled.span`
    opacity: ${props => (props.active ? "1" : "0")};
    transition: 1s;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    color: ${({ theme }) => theme.color_theme_a};
    font-size: 1.2em;
    font-weight: bold;
  `

  return (
    <Layout page={"contact"}>
      <Header animate color={"color_theme_c"}>
        Kontakt
      </Header>
      <Desc animate>
        {content.content.contact.desc}
        <br />
        <SendInfo active={isSent}>Wysłano!</SendInfo>
      </Desc>
      <Container onSubmit={send}>
        <Input
          small
          type="text"
          id="firstname"
          label="imię"
          onChange={changeHandlder}
          state={state}
        />
        <Input
          small
          type="text"
          id="lastname"
          label="nazwisko"
          onChange={changeHandlder}
          state={state}
        />
        <Input
          type="email"
          id="email"
          label="email"
          onChange={changeHandlder}
          state={state}
        />
        <Input
          as="textarea"
          id="textarea"
          rows="4"
          label="text"
          onChange={changeHandlder}
          state={state}
        />
        <Button as="button" type="submit" center>
          wyślij!
        </Button>
      </Container>
    </Layout>
  )
}

export default Contact
