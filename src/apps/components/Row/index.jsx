import styled from 'styled-components'
import { generatePropsStyle } from '../../../styles/global.styled'

const initProps = [
  '$flexDirection',
  '$textAlign',
  '$gap',
  '$justifyContent',
  '$alignItems',
  '$alignContent',
  '$rowGap',
  '$columnGap',
  '$borderRadius',
  '$flex',
]

const Row = styled.div`
  display: flex;
  ${(props) =>
   generatePropsStyle(props, initProps) }
`

export {
  Row
}
