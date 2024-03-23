import styled, { createGlobalStyle, css } from 'styled-components'
import background from '../assets/wood.jpg'
import { MEDIA, usingMedia } from 'src/styles/global.styled'
const fonts = [
  'https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,100..900&display=swap',
]

export const colors = {
  main: '#f6ad49',
  danger: '#d9333e',
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    margin: 0;
    overflow-x: clip;
    text-align: left;
    width: 100vw;
    font-family: "Truculenta", sans-serif;
  }
  
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    border: 0;
    margin: 0;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    padding: 6px 16px;
    box-shadow: none;
    cursor: pointer;
  }
  
  .text-white {
    color: #f3f3f4
  }
  
  .w-full {
    width: 100%;
  }
  
  .h-full {
    height: 100%;
  }
  
  .fill-current {
    fill: currentColor;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-xl {
    font-size: 42px;
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  .nav-btn {
    display: block;
    position: absolute;
    z-index: 20;
    user-select: none;
    -webkit-user-select: none;
    background-color: #5c2510;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;
    transition: all 0.5s ease;
    ${usingMedia(
      {
        [MEDIA.DESKTOP]: css`
          display: none;
        `,
      },
      'min-width'
    )}
  }

  .nav-btn:hover {
      background-color: #5c2510;
  }

  .nav-btn.custom-prev-button {
      top: 50%;
      left: -15px;
  }

  .nav-btn.custom-next-button {
      right: -15px;
      top: 50%;
  }
`

export const Main = styled.div`
  min-height: 100vh;
  padding: 5% 10%;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  ${usingMedia(
    {
      [MEDIA.DESKTOP]: css`
        padding-block: 30px;
      `,
    },
    'min-width'
  )}
`

export default GlobalStyle
