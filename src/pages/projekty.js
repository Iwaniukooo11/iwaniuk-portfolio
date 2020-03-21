import React from "react"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import Header from "../Components/Header/Header"
import Desc from "../Components/Desc/Desc"
import Button from "../Components/Button/Button"

import model3d from "../assets/projects/3d.jpg"
import cansat from "../assets/projects/cansat.jpg"
import swietlik from "../assets/projects/swietlik.jpg"
import tost from "../assets/projects/tost.jpg"
import portfolio from "../assets/projects/portfolio.jpg"
import math from "../assets/projects/math.jpg"

import content from "../utils/content"

// const images = [cansat, model3d, tost, swietlik]
const images = [
  {
    img: cansat,
    title: "Project Trailblazer",
    tech: "scss js panini",
    code: "https://github.com/Iwaniukooo11/project_cosmos",
    live: "http://www.project-trailblazer.pl/",
  },
  {
    img: model3d,
    title: "Cansat Model 3D",
    tech: "scss three.js chart.js firebase",
    code: "https://github.com/Iwaniukooo11/cansat_model3d",
    live: "https://iwaniukooo11.github.io/cansat_model3d/",
  },
  {
    img: tost,
    title: "Toster App",
    tech: "react router redux firebase scss",
    code: "https://github.com/Iwaniukooo11/toster-app",
    live: "https://iwaniukooo11.github.io/toster-app/",
  },
  {
    img: swietlik,
    title: "Raw Photography",
    tech: "sapper datoCMS scss",
    code: "https://github.com/Iwaniukooo11/agata-photography",
    live: "https://raw-swietlik.netlify.com/",
  },
  {
    img: math,
    title: "Math Quiz",
    tech: "scss js",
    code: "https://github.com/Iwaniukooo11/prostamatma",
    live: "https://iwaniukooo11.github.io/prostamatma/",
  },
  {
    img: portfolio,
    title: "Iwaniuk Portfolio",
    tech: "gatsby styled-components",
    code: "https://github.com/Iwaniukooo11/prostamatma",
    live: "https://iwaniukooo11.github.io/prostamatma/",
  },
]

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-area: list;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`
const ratio = 0.67

const Li = styled.li`
 background-image:url('${props => props.bg}');
  background-size: cover;
  width: 75vw;
  height: calc(${ratio} * 72vw);
  margin: 20px auto;
  box-shadow: 20px 0 35px rgba(0, 0, 0, 0.25);
  opacity:0;
  animation:scale 1s ${props => props.index * 300}ms both;

  @keyframes scale{
    from{
      transform:scale(0.1);
      opacity:0;

    }
   
    to{
      opacity:0.8;
      transform:scale(1);
    }
  }

  @media (min-width: 768px) {
    width: 350px;
    margin:0;
    height: calc(${ratio} * 350px);
  }
  @media (min-width: 1200px) {
    margin: 0px;
    opacity: 0.8;
    width: 25vw;
    height: calc(${ratio} * 25vw);
  }
  
  `
const MiniHead = styled.h3`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 100%;
  opacity: 0;
  color: ${({ theme }) => theme.color_theme_b};
`
const Technology = styled.p`
  position: absolute;
  bottom: calc(10% + 20px);
  left: 5%;
  opacity: 0;
  width: 100%;
  color: ${({ theme }) => theme.color_theme_a};
`
const StyledButton = styled(Button).attrs(props => ({
  className: "button",
}))`
  background-color: ${({ theme }) => theme.color_white};
  color: ${({ theme }) => theme.color_theme_b};
  border-color: ${({ theme }) => theme.color_theme_a};
  border-width: 2px;
  background-image: none;
  &:hover {
    color: ${({ theme }) => theme.color_theme_a};
    border-color: ${({ theme }) => theme.color_theme_b};
  }
  &:first-child {
    transform: translateX(-300px);
  }
  &:nth-child(2) {
    transform: translateX(300px);
  }
`
const ButtonWrap = styled.div`
  position: absolute;
  transform: translate(-50%);
  /* top: 40%; */
  top: 25%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  @media (min-width: 768px) {
    top: 40%;
  }
`
const Article = styled.article`
  transition: 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  .button-wrap,
  .minihead,
  .technology {
    transition: 0.5s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.92);
    .project-btn {
      transform: none;
    }
    .img {
      opacity: 0.2;
    }
    .button-wrap,
    .minihead,
    .technology {
      opacity: 1;
    }
  }
`

const Projects = props => {
  return (
    <Layout page="projects">
      <Header animate color={"color_theme_c"}>
        Projekty
      </Header>
      <Desc animate>{content.content.projects.data.desc}</Desc>
      <List>
        {images.map((el, i) => (
          <Li bg={el.img} index={i + 1}>
            <Article>
              <ButtonWrap className="button-wrap">
                <Button
                  empty
                  left
                  project
                  as={"span"}
                  // href={el.live}
                >
                  <a href={el.live} target="_blank">
                    live
                  </a>
                </Button>
                <Button
                  empty
                  right
                  project
                  // to={el.code}
                  // target={"_blank"}
                  as={"span"}
                >
                  <a href={el.code} target="_blank">
                    code
                  </a>
                </Button>
              </ButtonWrap>
              <MiniHead className="minihead">{el.title}</MiniHead>
              <Technology className="technology">{el.tech}</Technology>
              {/* <Img className="img" src={el.img} alt={el.title} /> */}
            </Article>
          </Li>
        ))}
      </List>
    </Layout>
  )
}

export default Projects
