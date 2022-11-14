import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import data from '../../utils/lista_shinies.json';

function Shinies () {
  const [shinies, setShinies] = useState([]);
  const [sortPkm, setSortPkm] = useState("sortByQuant");

  // const sortByName = data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  const sortByQuant = data.sort((a, b) => a.quant > b.quant ? 1 : -1);

  useEffect(() => {
    setShinies(data)
    if (shinies && sortPkm === "sortByName") {
      setShinies(shinies.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    }
    else {
      setShinies(sortByQuant);
    }
  }, [sortPkm]);

  function handleChange({ target: { value } }) {
    setSortPkm(value);
  }

  return (
    <div>
      <Header />
      <fieldset>
        <legend>Ordernar por:</legend>
        <div>
          <input type="radio" id="sortByName" name="sortBy" value="sortByName" onChange={handleChange}></input>
          <label htmlFor="sortByName">Nome</label>
        </div>
        <div>
          <input type="radio" id="sortByQuant" name="sortBy" value="sortByQuant" defaultChecked={true} onChange={handleChange}></input>
          <label htmlFor="sortByQuant">Quantidade</label>
        </div>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>POKEMON</th>
            <th>QUANTIDADE</th>
          </tr>
        </thead>
        <tbody>
        {shinies && shinies.map((pkm, index) => {
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
  );
}

export default Shinies;
