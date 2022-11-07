import React from 'react';
import logo from '../../images/Logo.png';

import * as S from './styled';

function Download() {
  return (
    <S.Container>
      <S.Container>
        <S.Title>Desktop (Windows)</S.Title>
        <S.Image>
          <img src={ logo } width={ 100 } alt="windows-logo" />
        </S.Image>
        <S.Button>
          <a 
          href="https://www.sendspace.com/file/4m2h1r/"
          target="_blank" rel="noreferrer"
          >
            Download
          </a>
        </S.Button>
        
        <S.Title>Mobile (Android)</S.Title>
        <S.Image>
          <img src={ logo } width={ 100 } alt="android-logo" />
        </S.Image>
        <S.Button>
          <a 
          href="https://www.mediafire.com/file/xyzvm9zaujlotc7/Otpokemon_Cz_1.3.apk/file/"
          target="_blank" rel="noreferrer"
          >
            Download
          </a>
        </S.Button>
      </S.Container>
      <S.Container>
        <S.Title>REQUERIMENTOS MÍNIMOS</S.Title>
        <S.Title>Windows</S.Title>
        <li>AMD/Intel 1 GHz.</li>
        <li>1 GB RAM.</li>
        <li>Placa de Video: DirectX 9.0/OpenGL.</li>
        <li>Espaço em Disco: 600 MB.</li>
        <S.Title>Android</S.Title>
        <li>Snapdragon 660, 820.</li>
        <li>3 GB RAM.</li>
        <li>Android 7.1.</li>
        <li>Espaço em Disco: 300 MB.</li>
      </S.Container>
    </S.Container>
  );
}

export default Download;
