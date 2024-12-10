import React from 'react';
import Header from '../../components/Header';
import { 
  AiFillAndroid,
  AiFillWindows
} from 'react-icons/ai';

import * as S from './styles';

const DESKTOP_DOWNLOAD ="https://www.sendspace.com/file/4m2h1r/";
const ANDROID_DOWNLOAD ="https://www.mediafire.com/file/xyzvm9zaujlotc7/Otpokemon_Cz_1.3.apk/file/";

function Download() {
  return (
    <S.Container>
      <Header />
      <div className="main">
        <div className="desktop">
          <h1>Desktop (Windows)</h1>
          <AiFillWindows className="img" />
          <button className="donwloadBtn">
            <a 
            href={DESKTOP_DOWNLOAD}
            target="_blank" rel="noreferrer"
            >
              DOWNLOAD
            </a>
          </button>
        </div>
        <div className="android">
          <h1>Mobile (Android)</h1>
          <AiFillAndroid className="img" />
          <button className="donwloadBtn">
            <a 
            href={ANDROID_DOWNLOAD}
            target="_blank" rel="noreferrer"
            >
              DOWNLOAD
            </a>
          </button>
        </div>
        <div>
          <h1>REQUERIMENTOS MÍNIMOS</h1>
          <h1>Windows</h1>
          <li>AMD/Intel 1 GHz.</li>
          <li>1 GB RAM.</li>
          <li>Placa de Video: DirectX 9.0/OpenGL.</li>
          <li>Espaço em Disco: 600 MB.</li>
          <h1>Android</h1>
          <li>Snapdragon 660, 820.</li>
          <li>3 GB RAM.</li>
          <li>Android 7.1.</li>
          <li>Espaço em Disco: 300 MB.</li>
        </div>
      </div>
    </S.Container>
  );
}

export default Download;
