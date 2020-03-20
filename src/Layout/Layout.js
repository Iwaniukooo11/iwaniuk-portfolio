import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../utils/theme"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Navigation from "../Layout/Nav/Nav"
import "bootstrap/dist/css/bootstrap.css"

import LeftCard from "../Components/LeftCard/LeftCard"
import bg_img from "../assets/icons/big_img.jpg"
import icon from "../assets/icons/icon.svg"

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
    overflow-x:hidden;
}
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    /* background: #FF0000; */
    background: transparent;
}
button,input,textarea{
  outline:none;
  font:inherit;
}
ul{
  list-style:none;
}
@keyframes animation {
  0% {
    transform: scale3d(.9);
    opacity: 0; }
  20% {
    opacity: 1; }
  40% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.08, 1.08, 1.08); }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1, 1, 1); }
  80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03); }
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1); } }
`
const Container = styled.main`
  max-width: 540px;

  min-height: 100vh; //!
  padding: 30px 5vw;
  display: grid;
  justify-items: center;
  align-content: center;
  row-gap: 10px;
  @media (min-width: 768px) {
    padding: 50px 5vw;
    justify-items: flex-start;
    justify-content: center;
    margin-left: 330px;
  }

  @media (min-width: 960px) {
    row-gap: 20px;
    margin-left: 500px;
  }
  @media (min-width: 1400px) {
    /* margin-left: 750px; */
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
    grid-template-areas: "header" "desc" "inputs";
  }
  &.projects {
    grid-template-areas: "header" "desc" "list";
    @media (min-width: 1200px) {
      /* max-width: 60%; */
      /* max-width: 100%; */
      /* width: 100%; */
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
  /* background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color_theme_b},
    ${({ theme }) => theme.color_theme_b}
  ); */
  background-color:${({ theme }) => theme.color_theme_b};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* transition: 0.3s; */
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
    /* transform: translateY(-100%); */
    animation: goOut 1.5s both;
  }
`
const Progress = styled.div`
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

// const WhiteCard = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 30;
//   /* background-color: ${({ theme }) => theme.color_white}; */
//   background-color:${({ theme }) => theme.color_theme_b};

//   @keyframes goOutWhite {
//     90% {
//       transform: none;
//     }
//     to {
//       transform: translateY(-100%);
//     }
//   }
//   &.active {
//     animation: goOutWhite 1s both;
//   }
// `

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

      // if (window.history.length == 2 && !isLoad) setIsLoad(true)

      console.log(window.history)
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
          <meta name="title" content="Mateusz Iwaniuk Portfolio" />
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Nazywam się Mateusz Iwaniuk i zajmuję się webdevem. Mieszkam w Bydgoszczy i tworzę strony internetowe. Jeśli potrzebujesz osoby robiącej strony www - Dobrze trafiłeś."
          />
          <meta
            name="keywords"
            content="Iwaniuk,Trailblazer,Cansat,Mateusz,Programista,Bydgoszcz,Frontend,front-end"
          />
          <meta property="og:image" content="static/big_img.jpg" />
          <meta
            propety="og:description"
            property="Nazywam się Mateusz Iwaniuk i zajmuję się webdevem. Mieszkam w Bydgoszczy i tworzę strony internetowe. Jeśli potrzebujesz osoby robiącej strony www - Dobrze trafiłeś."
          />
        </Helmet>
        {/* <WhiteCard className={isLoad && "active"} /> */}
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
