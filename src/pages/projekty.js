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

// const images = [cansat, model3d, tost, swietlik]
const images = [
  { img: cansat, title: "Project Trailblazer", tech: "html scss js panini" },
  {
    img: model3d,
    title: "Cansat Model 3D",
    tech: "html scss three.js chart.js firebase",
  },
  { img: tost, title: "Toster App", tech: "react router redux firebase scss" },
  { img: swietlik, title: "Raw Photography", tech: "sapper datoCMS scss" },
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

const Img = styled.img`
  /* width: 72vw;
  height: calc(${ratio} * 72vw);
  object-fit: cover;
  object-position: center;
  margin: 5px auto;
  box-shadow: 20px 0 35px rgba(0, 0, 0, 0.25);
  opacity: 0.95;
  @media (min-width: 768px) {
    width: 350px;
    height: calc(${ratio} * 350px);
  }
  @media (min-width: 1200px) {
    margin: 0px;
    opacity: 0.7;
    width: 25vw;
    height: calc(${ratio} * 25vw);
  } */
`
const Li = styled.li`
 background-image:url('${props => props.bg}');
  background-size: cover;
  width: 72vw;
  height: calc(${ratio} * 72vw);
  margin: 5px auto;
  box-shadow: 20px 0 35px rgba(0, 0, 0, 0.25);
  /* opacity: 0.95; */
  opacity:0;
  animation:scale 1s ${props => props.index * 300}ms both;

  @keyframes scale{
    from{
      transform:scale(0.1);
      opacity:0;
    /* opacity:0.3; */

    }
    75%{
      /* transform:scale(1.2); */
    }
    99%{
      /* opacity:0.3; */
    }
    to{
      opacity:0.8;
      transform:scale(1);
    }
  }

  @media (min-width: 768px) {
    width: 350px;
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
  top: 40%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`
const Link = styled.a`
  transition: 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  .button-wrap,
  .minihead,
  .technology {
    /* opacity: 0; */
    transition: 0.5s;
  }

  &:hover {
    /* background-color: ${({ theme }) => theme.color_white}; */
    background-color:rgba(255,255,255,0.92);
    .button{
      transform:none;
    }
    .img {
      opacity: 0.2;
    }
    .button-wrap,
    .minihead,
    .technology {
      opacity: 1;
      /* transition:.3s */
    }
  }
  /* display */

  /* @media (min-width: 1200px) {
    background-color: ${({ theme }) => theme.color_theme_b};
  } */
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
        {images.map((el, i) => (
          <Li bg={el.img} index={i + 1}>
            <Link href="#">
              <ButtonWrap className="button-wrap">
                <StyledButton empty left>
                  test
                </StyledButton>
                <StyledButton empty right>
                  test
                </StyledButton>
              </ButtonWrap>
              <MiniHead className="minihead">{el.title}</MiniHead>
              <Technology className="technology">{el.tech}</Technology>
              {/* <Img className="img" src={el.img} alt={el.title} /> */}
            </Link>
          </Li>
        ))}
      </List>
    </Layout>
  )
}

export default Projects
