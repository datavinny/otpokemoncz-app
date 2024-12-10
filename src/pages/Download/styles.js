import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  flex-grow: 1;
  .main {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-content: center;
    height: 800px;
    bottom: 30%;
    padding: 0% 0% 0% 0%;
    ul {
      text-decoration: none;
    }

    ${media.desktop} {
      height: 990px;
    }
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

  .donwloadBtn {
    background: ${({ theme }) => theme.color.secundario};
    color: ${({ theme }) => theme.color.textLight};
    font-size: 18px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    margin: 12px auto;
    padding: 18px;
    width: 100%;
  }
`;