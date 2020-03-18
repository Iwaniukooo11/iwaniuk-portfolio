import React from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"

import model3d from "../assets/projects/3d.jpg"
import cansat from "../assets/projects/cansat.jpg"
import swietlik from "../assets/projects/swietlik.jpg"
import tost from "../assets/projects/tost.jpg"

const images = [cansat, model3d, tost, swietlik]

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-area: list;
  align-items: center;
`
const ratio = 0.67

const Img = styled.img`
  /* width: 350px;
  height: 250px; */
  /* width: 262.5px;
  height: 187.5px; */
  width: 72vw;
  height: calc(${ratio} * 72vw);
  object-fit: cover;
  object-position: center;
  margin: 5px auto;
  box-shadow: 20px 0 35px rgba(0, 0, 0, 0.25);
  opacity: 0.95;
  @media (min-width: 768px) {
    width: 350px;
    height: 250px;
  }
`
const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Projects = props => {
  return (
    <Layout page="projects">
      <Header animate color={"color_theme_c"}>
        Projekty
      </Header>
      <Desc animate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a iusto
        eius voluptatem dolorem aliquid reiciendis numquam modi blanditiis
        explicabo culpa excepturi quod, enim quas sint esse eligendi sed facere?
      </Desc>
      <List>
        {images.map(el => (
          <Li>
            <Img src={el} alt={"project-image"} />
          </Li>
        ))}
      </List>
    </Layout>
  )
}

export default Projects
