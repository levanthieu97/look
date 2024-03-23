import { MEDIA, usingMedia } from 'src/styles/global.styled'
import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 15px;
  ${usingMedia({
    [MEDIA.TABLET]: css`
      grid-template-columns: repeat(2, 1fr);
    `,
    [MEDIA.DESKTOP]: css`
      grid-template-columns: repeat(3, 1fr);
      row-gap: 30px;
    `,
  }, 'min-width')}
`

export default Grid
