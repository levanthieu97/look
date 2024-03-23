import styled, { css } from "styled-components";
import { Row } from "../Row";
import { MEDIA, usingMedia } from "src/styles/global.styled";

/**
 * border-radius: 25px
 * padding: 30px 20px
 * gap: 20px
 */
export const CardStyled = styled(Row)`
  background-color: #f3f3f4;
  color: #150f12;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const RoundImageStyled = styled.img`
  width: 60%;
  height: 150px;
  margin-inline: auto;
  border-radius: 50%;
  object-fit: cover;
  ${usingMedia({
    [MEDIA.DESKTOP]: css`
      height: 180px;
    `,
  }, 'min-width')}
`

export const SuggestionImageStyled = styled.img`
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 20px;
`

export const TextStyled = styled.p`
  font-size: ${({$fontSize}) => $fontSize ? `${$fontSize}px` : '20px'};
  font-weight: ${({$fontWeight}) => $fontWeight || 500};
  margin-block: 10px
`

export const PriceStyled = styled.div`
  margin-inline: 10%;
  padding: 15px 45px;
  background-color: #5c2510;
  color: #f3f3f4;
  border-radius: 30px;
  font-size: 22px;
`

