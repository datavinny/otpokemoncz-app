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
  // border: 1px solid green;
  
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  padding: 20% 0% 45% 0%;
  gap: 10px 0px;
  margin: auto;

  ${media.desktop} {
    heigth: 100%;
    padding: 10% 0% 11% 0%;
  }

  h1 {
    font-size: 60px;
    text-align: center;
  }
  
  .main {
    display: flex;
  }

  form {
    background: ${BACKGROUND_COLOR}; 
    display: flex;
    flex-flow: column wrap;
    label {
      display: flex;
      flex-flow: column wrap;
      padding:18px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    input {
      width: 90%;
      padding: 15px;
      font-size: 20px;
      text-align: center;
      border-radius: 25px;
    }
    .registerBtn {
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
  }
`;