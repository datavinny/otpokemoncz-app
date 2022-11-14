import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.png';
// import { login } from '../../services/api';

import * as S from './styles';

const USERKEY = '@app-otpcz:user';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  // const [failedServerConnection, setFailedServerConnection] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USERKEY));

    if (user) navigate('/news');
  }, [navigate]);

  useEffect(() => {
    const { username, password } = data;
    const usernameMinLength = 4;
    const passwordMinLength = 6;

    if (username.length >=usernameMinLength  && password.length >= passwordMinLength) {
      setBtnDisabled(false);
    }

    if (username.length < passwordMinLength || password.length < passwordMinLength) {
      setBtnDisabled(true);
    }
  }, [data]);

  // async function sendData() {
  //   const result = await login(data);
  //   if (!result) {
  //     setFailedServerConnection(true);
  //     return;
  //   }
  //   localStorage.setItem(USERKEY, JSON.stringify(result));

  //   navigate('/news');
  // }

  return (
    <S.Container>
      <img src={ logo } alt="Logo"  />
      <h3>De fans para fans.</h3>
      <form className="main">
        <label htmlFor="input-username">
          Login
          <input
            type="text"
            id="input-username"
            name="username"
            value={ data.username }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="username"
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
          />
        </label>
        <button
          className="loginBtn"
          type="button"
          disabled={ isBtnDisabled }
          // onClick={ () => sendData() }
        >
          LOGIN
        </button>
        <button
          className="registerBtn"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      {/* {
        (failedServerConnection)
          && (
            <div>
              Nome de usuario ou a senha não estão corretos.
              Por favor, tente novamente.
            </div>
          )
      } */}
    </S.Container>
  );
}

export default Login;
