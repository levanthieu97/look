import Container from "../Container";
import Navigation from "../Navigation";
import HeaderStyled from "./styled";

const Header = () => (
  <HeaderStyled>
    <Container>
      <Navigation/>
    </Container>
  </HeaderStyled>
)

export default Header