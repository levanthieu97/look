import { NumericFormat } from 'react-number-format'
import { CardStyled, PriceStyled, RoundImageStyled, TextStyled } from './styled'

const Card = ({ imageSrc, imageAlt, title, content, hightLightContent }) => {
  return (
    <CardStyled $borderRadius={25} $gap={20} $flexDirection={'column'}>
      <RoundImageStyled src={imageSrc} alt={imageAlt} loading='lazy' />
      <div>
        <TextStyled $fontSize={26} $fontWeight={700}>
          {title}
        </TextStyled>
        <TextStyled>{content}</TextStyled>
      </div>
      <PriceStyled>
        <NumericFormat displayType="text" value={hightLightContent} thousandSeparator=',' suffix='đ' />
      </PriceStyled>
    </CardStyled>
  )
}

export default Card
