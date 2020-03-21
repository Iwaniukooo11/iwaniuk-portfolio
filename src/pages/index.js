import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Button from "../Components/Button/Button"
import ButtonWrapper from "../Components/ButtonWrapper/ButtonWrapper"
import content from "../utils/content"

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
    <Header animate>mateusz iwaniuk</Header>
    <Webdeveloper>
      <Desc>
        <span class="web">web</span>
        <span class="developer">developer</span>
      </Desc>
    </Webdeveloper>
    <Desc animate>{content.content.home.data.desc}</Desc>
    <ButtonWrapper>
      <Button pos={"pos-left"} as={"span"}>
        <AniLink cover direction="right" bg="#fff" to={`/o-mnie`}>
          O mnie
        </AniLink>
      </Button>
      <Button empty pos={"pos-right"} to={"projekty"}>
        <AniLink cover direction="right" bg="#fff" to={`/projekty`}>
          projekty
        </AniLink>
      </Button>
    </ButtonWrapper>
  </Layout>
)

export default IndexPage
