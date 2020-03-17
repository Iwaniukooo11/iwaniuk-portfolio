import React from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../utils/theme"
import Navigation from "../Layout/Nav/Nav"

import LeftCard from "../Components/LeftCard/LeftCard"

const GlobalStyle = createGlobalStyle`
/* @import './Layout.scss'; */
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
a{
  text-decoration:none;
  color:inherit;
  font:inherit;
}
body{
    color:${({ theme }) => theme.color_white};
    font-family: 'Poppins', sans-serif;
    font-weight:300;
}
button{
  outline:none;
  font:inherit;
}
ul{
  list-style:none;
}
`
const Container = styled.main`
  min-height: 100vh; //!
  padding: 0 5vw;
  display: grid;
  justify-items: center;
  align-content: center;
  &.home {
    grid-template-areas: "header" "webdev" "desc" "button-wrapper";
    @media (min-width: 768px) {
      justify-items: flex-start;
      justify-content: center;
      padding-left: calc(37% + (100% - 37% - 440px) / 2);
      /* grid-template-areas: "card header" "card webdev" "card desc" "card button-wrapper"; */
      /* grid-template-columns: 37% 1fr; */
    }
    @media (min-width: 960px) {
      row-gap: 20px;
      padding-left: calc(450px + (100% - 850px - 440px) / 2);
    }
    @media (min-width: 1700px) {
      padding-left: 200px;
    }
  }
`

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
          />
        </Helmet>
        <Navigation content={theme.content} />
        <LeftCard content={theme.content} />
        <Container className={props.page}>{props.children}</Container>
      </>
    </ThemeProvider>
  )
}

export default Layout
