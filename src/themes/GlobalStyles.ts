import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Mukta';


}
html{
    /* font-size: 62.5%; */
    font-size: 100%;
    font-family: 'Mukta';
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100vw;
}
body{
    margin: 0;
  font-family: 'Mukta';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background: radial-gradient(118.38% 303.54% at 3.96% 118.38%, rgba(119, 72, 216, 0.1) 0%, rgba(119, 72, 216, 0) 100%), radial-gradient(57.34% 103.84% at 50% 0%, rgba(156, 231, 90, 0.1) 0%, rgba(156, 231, 90, 0) 100%);
  background-color: #0B090D;
  letter-spacing: -0.03em;
  min-height: 100vh;
  font-size: 1rem;
  color: white;

}
p,h1, h2, h3,ul ,li,a{
    margin: 0;
    padding: 0;
    line-height: 0;
    text-decoration: none;
}

`;
export default GlobalStyles;
