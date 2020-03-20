import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"
import emailjs from "emailjs-com"
import content from "../utils/content"

const inputData = [
  { id: "firstname", label: "imię", type: "text" },
  { id: "lastname", label: "nazwisko", type: "text" },
  { id: "email", label: "email", type: "email" },
  { id: "textarea", label: "wiadomość", type: "text", as: "textarea" },
]

const Container = styled.form`
  grid-area: inputs;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

// console.log(`${process.env.GATSBY_APP_USER_ID}`)
// console.log(`${process.env.NODE_ENV}`)

const Contact = props => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    textarea: "",
  })
  const [isSent, setIsSent] = useState(false)
  const [invalid, setInvalid] = useState("")

  const changeHandlder = e => {
    state[e.target.id] = e.target.value
    // if (!e.target.value) delete state[e.target.id]
    setState(state)
    console.log(state)
  }

  const validate = obj => {
    // if (Object.keys(obj).length != 4) throw "NOT_ALL"
    const testObj = { ...obj }
    delete testObj.email
    for (const [key, value] of Object.entries(testObj)) {
      if (!value) return `${key}`
    }

    const re = /\S+@\S+\.\S+/
    if (!re.test(obj.email)) return "email"

    return "OK"
  }

  const send = e => {
    e.preventDefault()
    const resp = validate(state)
    // console.log(resp)
    // if (resp !== "OK") {
    setInvalid(resp)
    // }
    if (resp === "OK") {
      emailjs.init(`${process.env.GATSBY_APP_USER_ID}`)
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
            setState({ firstname: "", lastname: "", email: "", textarea: "" })
            setIsSent(true)
          },
          error => {
            console.log(error.text)
          }
        )
    }
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
        {inputData.map(el => (
          <Input
            type={el.type}
            key={el.id}
            // value={}
            invalid={invalid}
            id={el.id}
            label={el.label}
            onChange={changeHandlder}
            state={state}
            as={el.as || null}
          />
        ))}
        <Button as="button" type="submit" center>
          wyślij!
        </Button>
      </Container>
    </Layout>
  )
}

export default Contact
