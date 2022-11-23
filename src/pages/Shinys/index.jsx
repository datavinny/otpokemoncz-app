import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import data from '../../utils/lista_shinys.json';

import * as S from './styles';

function Shinys () {
  const [shinys, setShinys] = useState([]);
  // const [sortPkm, setSortPkm] = useState("");

  useEffect(() => {
    const result = data.sort((a, b) => a.quant > b.quant ? 1 : -1);
    setShinys(result);
    // if (sortPkm === "sortByName") {
    //   setShinies(backupData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    // }
    // if (sortPkm === "sortByQuant") {
    //   setShinies(data.sort((a, b) => a.quant > b.quant ? 1 : -1));
    // }
  }, []);

  // function handleChange({ target: { value } }) {
  //   setSortPkm(value);
  // }

  return (
    <S.Container>
      <Header />
        <div className="main">
        {/* <fieldset>
          <legend>Ordernar por:</legend>
          <div>
            <input type="radio" id="sortByName" name="sortBy" value="sortByName" onChange={handleChange}></input>
            <label htmlFor="sortByName">Nome</label>
          </div>
          <div>
            <input type="radio" id="sortByQuant" name="sortBy" value="sortByQuant" onChange={handleChange}></input>
            <label htmlFor="sortByQuant">Quantidade</label>
          </div>
        </fieldset> */}
          <table>
            <thead>
              <tr>
                <th>POKEMON</th>
                <th>QUANTIDADE</th>
              </tr>
            </thead>
            <tbody>
            {shinys && shinys.map((pkm, index) => {
              return (
                <tr key={index}>
                  <td>{pkm.name}</td>
                  <td>{pkm.quant}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
    </S.Container>
  );
}

export default Shinys;
