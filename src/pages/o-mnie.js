import React from "react"
import styled from "styled-components"

import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Collapse from "../Components/CollapseAbout/CollapseAbout"

import cansat_1 from "../assets/about/cansat-1.jpg"
import cansat_2 from "../assets/about/cansat-2.jpg"

import content from "../utils/content"

const gallery = [[cansat_1, cansat_2], []]

const Ul = styled.ul`
  margin-top: 30px;
`

const About = props => {
  return (
    <Layout page="about">
      <Header animate color={"color_theme_c"}>
        O mnie
      </Header>
      <Desc animate>{content.content.about.data.desc}</Desc>
      <Ul>
        {content.content.about.data.list.map((el, i) => (
          <li key={el.head}>
            <Collapse
              header={el.head}
              desc={el.desc}
              images={gallery[i]}
              link
            />
          </li>
        ))}
      </Ul>
    </Layout>
  )
}

export default About
