import styled from 'styled-components';
// import { defaultTheme } from '../../global/theme';

const BACKGROUND_COLOR = (props) => props.theme.body;
const FONT_COLOR = (props) => props.theme.fontColor;

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${FONT_COLOR};

  .main {
    flex-flow: column wrap;
    align-items: center;
    align-content: center;
    padding: 0% 0% 0% 0%;
    gap: 10px 0px;
    table, th, td {
      font-size: 20px;
      text-align: center;
      border: 1px solid darkblue;
      width: 100%;
      ${media.desktop} {
        padding: 5px;
      }
    }
  }
`;