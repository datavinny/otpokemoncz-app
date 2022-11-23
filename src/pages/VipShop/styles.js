import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  
  .main {
    flex-flow: column wrap;
    align-items: center;
    align-content: center;
    padding: 0% 0% 5% 0%;
    font-size: 20px;
    ${media.desktop} {
      text-align: center;
      heigth: 100%;
      padding: 5% 0% 10% 0%;
    }
    table, th, td {
      text-align: center;
      border: 1px solid  ${({ theme }) => theme.color.secundario};
      border-color: ${({ theme }) => theme.color.textLight};
      width: 100%;
      ${media.desktop} {
        padding: 5px;
      }
    }
  }

  h1 {
    font-size: 35px;
    text-align: center;
  }
`;