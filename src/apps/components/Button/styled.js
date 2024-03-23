import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const variantButton = {
  default: css`
  `,
  outline: css`
  `,
  shadow: css`
  `
}

const ButtonStyled = styled.button`
  text-decoration: none;
  text-transform: uppercase;
`

const LinkButtonStyled = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`

export {
  ButtonStyled,
  LinkButtonStyled
}