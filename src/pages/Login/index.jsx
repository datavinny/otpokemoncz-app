import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.png';
// import { login } from '../../services/api';

import * as S from './styled';

const USERKEY = '@app-otpcz:user';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const [failedServerConnection, setFailedServerConnection] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USERKEY));

    if (user) navigate('/news');
  }, []);

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
      <S.Image>
        <img src={ logo } width={ 100 } alt="Logo" />
      </S.Image>
      <S.Title>otPokemon CZ</S.Title>
      <S.Forms>
        <S.Label htmlFor="input-username">
          Login
          <S.Input
            type="text"
            id="input-username"
            name="username"
            value={ data.username }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="username"
          />
        </S.Label>
        <S.Label htmlFor="input-password">
          Senha
          <S.Input
            type="password"
            id="input-password"
            name="password"
            value={ data.password }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="******"
          />
        </S.Label>
        <S.ButtonLogin
          type="button"
          disabled={ isBtnDisabled }
          // onClick={ () => sendData() }
        >
          LOGIN
        </S.ButtonLogin>
        <S.ButtonRegister
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </S.ButtonRegister>
      </S.Forms>

      {
        (failedServerConnection)
          && (
            <S.FailLogin>
              Nome de usuario ou a senha não estão corretos.
              Por favor, tente novamente.
            </S.FailLogin>
          )
      }
    </S.Container>
  );
}

export default Login;