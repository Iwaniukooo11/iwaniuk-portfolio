import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"
import emailjs from "emailjs-com"
import content from "../utils/content"
import socials from "../utils/socials"

const inputData = [
  { id: "firstname", label: "imię", type: "text", small: true, max: 16 },
  { id: "lastname", label: "nazwisko", type: "text", small: true, max: 16 },
  { id: "email", label: "email", type: "email" },
  { id: "textarea", label: "wiadomość", type: "text", as: "textarea" },
]

const SocialsContainer = styled.span`
  display: flex;
  justify-content: center;
  grid-area: socials;
  @media (min-width: 768px) {
    * {
      display: none;
    }
  }
`

const Container = styled.form`
  grid-area: inputs;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
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
const Bold = styled.b`
  font-weight: bold;
  color: ${({ theme }) => theme.color_theme_a};
  display: block;
`
const Icon = styled.i`
  font-size: 23px;
  margin: 0 20px 20px 0;
  transition: 0.3s;
  opacity: 0.8;
  color: ${({ theme }) => theme.color_theme_b};

  &:hover {
    opacity: 1;
  }
`

const Contact = props => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    textarea: "",
  })
  const [isSent, setIsSent] = useState(false)
  const [btnSending, setBtnSending] = useState(false)
  const [invalid, setInvalid] = useState("")

  const changeHandlder = e => {
    state[e.target.id] = e.target.value
    setState(state)
  }

  const validate = obj => {
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
    setInvalid(resp)
    if (resp === "OK") {
      setBtnSending(true)
      emailjs.init(`${process.env.GATSBY_APP_USER_ID}`)
      emailjs
        .sendForm(
          "gmail",
          "template_riwnvpNw",
          e.target,
          `${process.env.GATSBY_APP_USER_ID}`
        )
        .then(
          result => {
            setState({ firstname: "", lastname: "", email: "", textarea: "" })
            setIsSent(true)
            setBtnSending(false)
          },
          error => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <Layout page={"contact"}>
      <Header animate color={"color_theme_c"}>
        Kontakt
      </Header>
      <Desc animate>
        {content.content.contact.desc}
        <Bold>mateusz.iwaniuk11@gmail.com</Bold>
        <br />
        <SocialsContainer>
          {socials.map(el => (
            <a href={el.link} target="_blank" key={el.link}>
              <Icon className={el.icon} />
            </a>
          ))}
        </SocialsContainer>
        <SendInfo active={isSent}>Wysłano!</SendInfo>
      </Desc>

      <Container onSubmit={send}>
        {inputData.map(el => (
          <Input
            type={el.type}
            key={el.id}
            small={el.small || null}
            invalid={invalid}
            id={el.id}
            label={el.label}
            onChange={changeHandlder}
            state={state}
            as={el.as || null}
            max={el.max}
          />
        ))}
        <Button as="button" type="submit" center disabled={btnSending}>
          wyślij!
        </Button>
      </Container>
    </Layout>
  )
}

export default Contact
