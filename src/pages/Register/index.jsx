import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { register } from '../../services/api';

import * as S from './styles';

// const USERKEY = '@app-otpcz:user';

function Register() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  // const [failedServerConnection, setFailedServerConnection] = useState(false);

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    const { email, password, username } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const usernameMinLength = 4;
    const passwordMinLength = 6;

    if (emailRegex.test(email) && password.length >= passwordMinLength
    && username.length >= usernameMinLength) {
      setBtnDisabled(false);
    }

    if (!emailRegex.test(email) || password.length < passwordMinLength
    || username.length < usernameMinLength) {
      setFailedTryLogin(true);
      setBtnDisabled(true);
    }

    if (email === '' || password === '' || username === '') setFailedTryLogin(false);
  }, [data]);

  async function sendData() {
    // const result = await register(data);
    // if (!result) {
    //   setFailedServerConnection(true);
    //   return;
    // }
    // localStorage.setItem(USERKEY, JSON.stringify(result));
    navigate('/news');
  }

  return (
    <S.Container>
      <h1>Cadastro</h1>
      <form className="main">
        <label htmlFor="input-username">
          Nome de usuario
          <input
            type="text"
            id="input-username"
            name="username"
            value={ data.username }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="username"
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            id="input-password"
            name="password"
            value={ data.password }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="******"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          className="registerBtn"
          type="button"
          disabled={ isBtnDisabled }
          onClick={ () => sendData() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      {
        (failedTryLogin)
          && (
            <p>
              O endereço de e-mail, senha ou nome estão em um formato invalido.
              Por favor, tente novamente.
            </p>
          )
      }
      {/* {
        (failedServerConnection)
          && (
            <S.FailConnect>
              Sistema fora do ar.
              Por favor, tente novamente, mais tarde.
            </S.FailConnect>
          )
      } */}
    </S.Container>
  );
}
export default Register;
