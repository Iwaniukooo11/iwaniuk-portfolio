import React from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"

const Container = styled.div`
  grid-area: inputs;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
// const StyledButton = styled(Button)`
//   margin: 10px auto;
// `

const Contact = props => {
  return (
    <Layout page={"contact"}>
      <Header animate color={"color_theme_c"}>
        Kontakt
      </Header>
      <Desc animate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis
        voluptatum distinctio saepe ex. Voluptas quos harum consequuntur
        voluptatum assumenda dolor enim vero suscipit accusamus. Magnam
        molestias nam officia obcaecati?
      </Desc>
      <Container>
        <Input small type="text" id="firstname" label="imię" />
        <Input small type="text" id="lastname" label="nazwisko" />
        <Input type="email" id="email" label="imię" label="email" />
        <Input as="textarea" id="textarea" rows="4" label="text" />
        <Button as="button" type="submit" center>
          wyślij!
        </Button>
      </Container>
    </Layout>
  )
}

export default Contact
