import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 992px)',
}

export const Container = styled.div`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  padding: 20% 0% 40% 0%;
  gap: 30px 0px;
  margin: auto;

  ${media.desktop} {
    heigth: 100%;
    padding: 10% 0% 10% 0%;
  }

  img {
    width: 300px;
    display: flex;
  }

  h3 {
    font-size: 18px;
    text-align: center;
  }
  
  .main {
    display: flex;
    flex-grow: 1;
  }

  form {
    flex-flow: column wrap;
    background: ${({ theme }) => theme.color.primario};
    label {
      display: flex;
      flex-flow: column wrap;
      padding: 18px;
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }
    input {
      width: 90%;
      padding: 15px;
      font-size: 20px;
      text-align: center;
      border-radius: 25px;
    }
    .loginBtn {
      background: ${({ theme }) => theme.color.secundario};
      color: ${({ theme }) => theme.color.textLight};
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      margin: 12px auto;
      padding: 18px;
      width: 90%;
    }
    .registerBtn {
      background: ${({ theme }) => theme.color.secundario};
      color: ${({ theme }) => theme.color.textLight};
      display: flex;
      justify-content: center;
      border-radius: 8px;
      margin: 12px auto;
      padding: 18px;
      width: 90%;
      font-weight: bold;
    }
  }
`;