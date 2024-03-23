import { Row } from "src/apps/components/Row"
import { IconStyled, LogoStyled } from "./styled"
import fishGif from '../../assets/happy-excited.gif'

const Navigation = () => {
  return (
    <Row $justifyContent='space-between' $alignItems='center'>
      <LogoStyled>LOOK</LogoStyled>
      <IconStyled src={fishGif} alt="Liên hệ với chúng tôi"></IconStyled>
    </Row>
  )
}

export default Navigation
