import { createGlobalStyle } from "styled-components";
import background from '../assets/background.png'
export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body,html,#root{
  font-family: "Lato",sans-serif;
  min-height: 100vh;
  min-width:100vw;
  height:100%;
  width:100%;
   background-image: url(${background}) ;
   background-repeat:no-repeat;
   background-size:cover;
}
button{
  cursor: pointer;
}
a{
  text-decoration: none;
}
`;
