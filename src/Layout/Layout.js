import React from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../utils/theme"
import Navigation from "../Layout/Nav/Nav"
import "bootstrap/dist/css/bootstrap.css"

import LeftCard from "../Components/LeftCard/LeftCard"

const GlobalStyle = createGlobalStyle`
/* @import './Layout.scss'; */
*,*::after,*::before,h1,h2,h3,h4,p,a,span,button,input,textarea{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size:inherit;
}
a{
  text-decoration:none;
  color:inherit;
  font:inherit;
}
a:hover,a:active{
  text-decoration:none;
  color:inherit;

}
body{
    color:${({ theme }) => theme.color_white};
    font-family: 'Poppins', sans-serif;
    font-weight:300;
}
button,input,textarea{
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
  row-gap: 10px;
  @media (min-width: 768px) {
    padding-left: calc(37% + (100% - 37% - 440px) / 2);
    justify-items: flex-start;
    justify-content: center;
  }

  @media (min-width: 960px) {
    row-gap: 20px;
    padding-left: calc(450px + (100% - 850px - 440px) / 2);
  }
  @media (min-width: 1700px) {
    padding-left: 200px;
  }

  &.home {
    grid-template-areas: "header" "webdev" "desc" "button-wrapper";
    @media (min-width: 768px) {
    }
  }
  &.about {
    grid-template-areas: "header" "desc";
    @media (min-width: 960px) {
      row-gap: 20px;
      /* padding-left: calc(450px + (100% - 850px - 300px) / 2); */
    }
  }
  &.contact {
    grid-template-areas: "header" "desc" "inputs";
  }
`

const SVG = styled.div`
  border-radius: 71% 29% 0% 100% / 100% 23% 77% 0%;
  width: 200px;
  height: 90px;
  position: fixed;
  bottom: 0;
  right: -10%;
  z-index: -1;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color_theme_a},
    ${({ theme }) => theme.color_theme_b}
  );
  @media (min-width: 1200px) {
    width: 400px;
    height: 180px;
    right: 0;
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
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
        </Helmet>
        <SVG />
        <Navigation content={theme.content} />
        <LeftCard content={theme.content} />
        <Container className={props.page} content={theme.content}>
          {props.children}
        </Container>
      </>
    </ThemeProvider>
  )
}

export default Layout
