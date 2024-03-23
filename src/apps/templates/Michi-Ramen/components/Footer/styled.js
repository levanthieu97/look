import { Row } from 'src/apps/components/Row'
import styled, { css } from 'styled-components'
import { MEDIA, usingMedia } from 'src/styles/global.styled'

export const FooterContainer = styled(Row)`
  margin-block: 30px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 15px;
  ${usingMedia(
    {
      [MEDIA.TABLET]: css`
        grid-template-columns: repeat(2, 1fr);
      `,
      [MEDIA.DESKTOP]: css`
        grid-template-columns: repeat(4, 1fr);
        row-gap: 30px;
      `,
    },
    'min-width'
  )}
`

export const InfoStyled = styled(Row)`
  color: #f3f3f4;
  font-size: 22px;
  gap: 5px;
  ${usingMedia(
    {
      [MEDIA.TABLET]: css`
        width: 50%;
      `,
    },
    'max-width'
  )}
`

export const IconStyled = styled.span`
  height: 26px;
  width: 26px;
  padding: 2px;
  background-color: #f3f3f4;
  color: #150f12;
  border-radius: 50%;
  text-align: center;
  & svg {
    vertical-align: baseline;
    /* icon styles go here */
  }
`

export const Typography = styled.p`
  color: #f3f4f4;
  font-size: 16px;
  text-align: left;
`

export const NameStyled = styled.span`
  color: #ffdb59;
  font-size: 18px;
`
