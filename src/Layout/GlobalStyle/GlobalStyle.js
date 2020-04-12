import styled, { createGlobalStyle } from "styled-components"
import colors from "../../utils/colors"

const Global = createGlobalStyle`
*,*::after,*::before,h1,h2,h3,h4,p,a,span,button,input,textarea{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size:inherit;
}
::selection{
  background-color:${colors.color_theme_a};
  color:${colors.color_white}
}
a{
  text-decoration:none;
  color:inherit;
  font:inherit;
  outline:none !important;
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
    width: 0px;  
    background: transparent;
}
::-webkit-scrollbar-thumb {
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

export default Global
