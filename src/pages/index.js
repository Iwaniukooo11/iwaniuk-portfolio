import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Button from "../Components/Button/Button"
import ButtonWrapper from "../Components/ButtonWrapper/ButtonWrapper"
import content from "../utils/content"

let start = Date.now()
window.onload = () => {
  console.log(Date.now() - start)
}
document.fonts.ready.then = () => {
  console.log(Date.now() - start)
}

const Webdeveloper = styled.h2`
  padding-bottom: 20px;
  margin-top: 20px;
  grid-area: webdev;
  .web {
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
    <Header animate>mateusz iwaniuk</Header>
    <Webdeveloper>
      <Desc>
        <span class="web">web</span>
        <span class="developer">developer</span>
      </Desc>
    </Webdeveloper>
    <Desc animate>{content.content.home.data.desc}</Desc>
    <ButtonWrapper>
      <Button
        pos={"pos-left"}
        as={"span"}
        // to={"o-mnie"}
      >
        <AniLink
          cover
          // duration={5}
          direction="right"
          bg="#fff"
          // bg="#10A4A6"
          to={`/o-mnie`}
        >
          O mnie
        </AniLink>
      </Button>
      <Button empty pos={"pos-right"} to={"projekty"}>
        <AniLink
          cover
          // duration={5}
          direction="right"
          bg="#fff"
          // bg="#10A4A6"
          to={`/projekty`}
        >
          projekty
        </AniLink>
      </Button>
    </ButtonWrapper>
  </Layout>
)

export default IndexPage
