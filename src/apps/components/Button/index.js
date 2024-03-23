const Button = ({
  type,
  variant,
  linkTo,
  isExternal,
  children,
  ...props
}) => {

  if (type === 'link') {
    return <LinkButtonStyled>
      {children}
    </LinkButtonStyled>
  }
  
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  )
}