import { GlobeAlt, Phone, MapPin, Envelope } from '@styled-icons/heroicons-solid'
import Container from '../Container'
import { FooterContainer, IconStyled, InfoStyled, NameStyled, Typography } from './styled'
import { Row } from 'src/apps/components/Row'

const personalInformation = [
  {
    id: 'website',
    label: 'https://look.com',
    icon: <GlobeAlt size={18} />,
  },
  {
    id: 'phone',
    label: '+84901052711',
    icon: <Phone size={18} />,
  },
  {
    id: 'address',
    label: '14/13/3 Văn Chung, q.Tân Bình, TP.HCM',
    icon: <MapPin size={18} />,
  },
  {
    id: 'mail',
    label: 'lavanthieu97@gmail.com',
    icon: <Envelope size={18} />,
  },
]

const Footer = () => {
  return (
    <Container>
      <FooterContainer $justifyContent='space-between'>  
        {personalInformation.map((item) => (
          <InfoStyled key={`info-${item.id}`}>
            <IconStyled>{item.icon}</IconStyled>
            {item.label}
          </InfoStyled>
        ))}
      </FooterContainer>
      <Typography>
        © 2024 • By the makers of <NameStyled>Look</NameStyled>.
      </Typography>
    </Container>
  )
}

export default Footer
