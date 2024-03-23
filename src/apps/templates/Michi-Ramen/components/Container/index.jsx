import { Row } from "src/apps/components/Row";
import { MEDIA, usingMedia } from "src/styles/global.styled";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  ${usingMedia({
    [MEDIA.DESKTOP]: css`
      max-width: 1152px;
    `
  })}
`

export default Container