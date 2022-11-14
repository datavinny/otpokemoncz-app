import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body: {
    background-color: ${props => props.theme.body},
  },
`

export default  GlobalStyles;

export const defaultTheme = {
  color: {
    primario: '#29739c',
    secundario: '#393939',
    terciario: '#4a9cee',
    quaternario: '#838383',
    textDark: '#001813',
    textLight: '#F2FFFC',
  },
}
