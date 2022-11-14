import styled from 'styled-components';
import { defaultTheme } from '../../global/theme';

const BACKGROUND_COLOR = (props) => props.theme.body;
const FONT_COLOR = (props) => props.theme.fontColor;
const BUTTON_COLOR1 = defaultTheme.color.primario;

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${FONT_COLOR};
  
  width: 100%;
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  padding: 0% 0% 25% 0%;
  gap: 10px 0px;

  ${media.desktop} {
    heigth: 100%;
    padding: 0% 0% 9% 0%;
  }

  h1 {
    font-size: 20px;
    text-align: center;
  }
  
  .img {
    width: 300px;
    font-size: 90px;
    text-align: center;
    ${media.desktop} {
      flex-flow: row wrap;
      width: 100px;
      height: 100px;
      padding: 0% 0% 0% 20%;
    }
  }

  a {
    text-decoration: none;
    color: white
  }

  .main {
    display: flex;
    flex-flow: column wrap;
  }

  .donwloadBtn {
    background: ${BUTTON_COLOR1};
    color: ${FONT_COLOR};
    font-size: 18px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    margin: 12px auto;
    padding: 18px;
    width: 90%;
  }
`;