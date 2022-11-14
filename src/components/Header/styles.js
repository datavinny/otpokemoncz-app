
import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  height: 50px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;
  justify-content: space-between;

  ${media.desktop} {
    justify-content: space-around;
  }

  > svg {
    // position: fixed;
    color: white;
    width: 20px;
    height: 20px;
    margin-top: 15px;
    margin-left: 32px;
    cursor: pointer;
  }

  .theme {
    background-color: #1A202C; 
    color: white;
    cursor: pointer; 
    width: 50px;
    height: 30px;
    margin-top: 10px;
    margin-left: 32px;
    cursor: pointer;
  }
`;