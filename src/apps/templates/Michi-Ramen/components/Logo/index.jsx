import logoMichi from 'templates/Michi-Ramen/assets/logo.png'
import styled from 'styled-components'

const LogoStyled = styled.img`
  height: 44px;
`

const Logo = () => (
  <LogoStyled src={logoMichi} alt='Michi Ramen'/>
)

export default Logo
