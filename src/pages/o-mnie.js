import React from "react"
import styled from "styled-components"

import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Collapse from "../Components/CollapseAbout/CollapseAbout"

import cansat_1 from "../assets/about/cansat-1.jpg"
import cansat_2 from "../assets/about/cansat-2.jpg"

import content from "../utils/content"
console.log(content)

const gallery = [[cansat_1, cansat_2], []]

const Ul = styled.ul`
  margin-top: 30px;
`
const Li = styled.li``

const Img = styled.img`
  width: 250px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin: 15px 20px;
  box-shadow: 10px 0 35px rgba(75, 97, 157, 0.65);
  /* box-shadow: 10px 0 35px rgba(16, 164, 166, 0.5); */
`
const ImagesWrap = styled.div`
  grid-area: images;
`

const About = props => {
  console.log(props)
  return (
    <Layout page="about">
      <Header color={"color_theme_c"}>O mnie</Header>
      <Desc>{content.content.about.data.desc}</Desc>
      <Ul>
        {/* <Li>
          <Collapse
            header={"jestem finalistą konkursu cansat 2020"}
            desc={txt}
          />
        </Li>
        <Li>
          <Collapse header={"piszę artykuły na dev.to"} desc={txt} />
        </Li> */}
        {content.content.about.data.list.map((el, i) => (
          <Li key={el.head}>
            <Collapse header={el.head} desc={el.desc} images={gallery[i]} />
            {/* <ImagesWrap>
              {gallery[i].map(obj => (
                <Img key={obj} alt={"gallery image"} src={obj} />
              ))}
            </ImagesWrap> */}
          </Li>
        ))}
      </Ul>
    </Layout>
  )
}

export default About
