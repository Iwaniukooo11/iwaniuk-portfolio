import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import theme from "../utils/theme"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import GlobalStyle from "./GlobalStyle/GlobalStyle"

import Navigation from "../Layout/Nav/Nav"
import "bootstrap/dist/css/bootstrap.css"

import LeftCard from "../Components/LeftCard/LeftCard"
import bg_img from "../assets/icons/big_img.jpg"
import icon from "../assets/icons/icon.svg"

const Container = styled.main`
  min-height: 100vh; //!
  padding: 40px 5vw;
  display: grid;
  justify-items: center;
  align-content: center;
  row-gap: 10px;
  @media (min-width: 768px) {
    padding: 50px 7vw;
    justify-items: flex-start;
    justify-content: center;
    margin-left: 330px;
    max-width: 540px;
  }

  @media (min-width: 960px) {
    row-gap: 20px;
    margin-left: 500px;
  }
  @media (min-width: 1400px) {
    margin-left: 750px;
    max-width: 620px;
  }

  &.home {
    grid-template-areas: "header" "webdev" "desc" "button-wrapper";
    @media (min-width: 768px) {
    }
  }
  &.about {
    grid-template-areas: "header" "desc";
  }
  &.contact {
    grid-template-areas: "header" "desc" "socials" "inputs";
  }
  &.projects {
    grid-template-areas: "header" "desc" "list";
    @media (min-width: 1200px) {
      max-width: 100%;
    }
    @media (min-width: 1400px) {
      margin-left: 500px;
    }
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

const LoadCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color_theme_b};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateY(-100%);
  @keyframes goOut {
    from {
      transform: none;
    }
    75% {
      transform: none;
    }
    to {
      transform: translateY(-100%);
    }
  }

  &.active {
    animation: goOut 1.5s both;
  }
`
const Progress = styled.div`
  opacity: 0;
  background-color: ${({ theme }) => theme.color_white};
  width: 10%;
  height: 1vh;
  z-index: 200;
  position: fixed;
  top: 50%;

  @keyframes grow {
    from {
      width: 10%;
    }
    to {
      width: 80%;
      opacity: 0;
    }
  }
  @keyframes goOutLine {
    from {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  &.active {
    animation: grow 0.8s 0.2s both, goOutLine 1.5s both;
    &::before {
      content: "Loading...";
      transform: translateX(-50%);
      left: 50%;
      top: 45%;
      position: fixed;
      z-index: 200;
      color: ${({ theme }) => theme.color_white};
    }
  }
`

const Layout = props => {
  let historyState = ""
  try {
    historyState = window.history.state
  } catch {}

  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    try {
      if (window !== "undefined")
        if (!window.history.state && !isLoad) setIsLoad(true)
    } catch {}
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet>
          <html prefix="og: http://ogp.me/ns#" />
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
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta property="og:title" content="Mateusz Iwaniuk Portfolio" />
          <meta name="author" content="Mateusz Iwaniuk" />
          {/* <meta name="title" content="Mateusz Iwaniuk Portfolio" /> */}
          <title>Mateusz Iwaniuk Portfolio</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Rozpoczynasz nowy biznes, zakładasz organizację? Pewnie potrzebujesz strony internetowej! W takim razie trafiłeś najlepiej jak mogłeś, bo zajmuję się tym z pasją."
          />
          <meta
            name="keywords"
            content="Iwaniuk,Trailblazer,Cansat,Mateusz,Programista,Bydgoszcz,Frontend,front-end"
          />
          <meta property="og:image" content="/icons/big_img.jpg" />
          <meta
            propety="og:description"
            property="Rozpoczynasz nowy biznes, zakładasz organizację? Pewnie potrzebujesz strony internetowej! W takim razie trafiłeś najlepiej jak mogłeś, bo zajmuję się tym z pasją."
          />
        </Helmet>
        <Progress className={isLoad && "active"} />
        <LoadCard className={isLoad && "active"} />
        <SVG />
        <Navigation content={theme.content} />
        {isLoad || historyState ? (
          <Container className={props.page} content={theme.content}>
            {props.children}
          </Container>
        ) : null}

        <TransitionPortal>
          <LeftCard content={theme.content} />
        </TransitionPortal>
      </>
    </ThemeProvider>
  )
}

export default Layout
