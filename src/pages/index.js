import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Button from "../Components/Button/Button"
import ButtonWrapper from "../Components/ButtonWrapper/ButtonWrapper"

// const SVG = styled.div`
//   border-radius: 71% 29% 0% 100% / 100% 23% 77% 0%;
//   width: 200px;
//   height: 90px;
//   position: fixed;
//   bottom: 0;
//   right: -10%;
//   background-image: linear-gradient(
//     to right,
//     ${({ theme }) => theme.color_theme_a},
//     ${({ theme }) => theme.color_theme_b}
//   );
//   @media (min-width: 1200px) {
//     width: 400px;
//     height: 180px;
//     right: 0;
//   }
// `

const Webdeveloper = styled.h2`
  padding-bottom: 20px;
  margin-top: 20px;
  grid-area: webdev;
  font-size: 18px;
  .web {
    /* font-weight: bold; */
    color: ${({ theme }) => theme.color_theme_a};
  }
  .developer {
    color: ${({ theme }) => theme.color_theme_b};
    font-weight: 300;
  }
  @media (min-width: 96px) {
    transform: translateY(-20px);
  }
`

const IndexPage = props => (
  <Layout page={"home"}>
    {/* <SVG /> */}
    {console.log(props)}
    <Header>mateusz iwaniuk</Header>
    <Webdeveloper>
      <span class="web">web</span>
      <span class="developer">developer</span>
    </Webdeveloper>
    <Desc>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aliquid
      ipsam nam vel animi autem. Libero, numquam quisquam! Voluptates
      repudiandae labore delectus nemo voluptas! Deserunt quibusdam dicta autem
      eligendi odit.
    </Desc>
    <ButtonWrapper>
      <Button pos={"pos-left"}>Projekty</Button>
      <Button empty pos={"pos-right"}>
        Kontakt
      </Button>
    </ButtonWrapper>
  </Layout>
)

export default IndexPage
