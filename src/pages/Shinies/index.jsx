import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import data from '../../utils/lista_shinies.json';

function Shinies () {
  const [makeFetch, setMakeFetch] = useState(true);
  const [shinies, setShinies] = useState([]);
  // const [sortPkm, setSortPkm] = useState("");

  useEffect(() => {
    async function fetchTable() {
      const result = await data.sort((a, b) => a.quant > b.quant ? 1 : -1);
      setShinies(result);
    }
    if (makeFetch === true) {
      fetchTable();
      setMakeFetch(false);
    }
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
    <div>
      <Header />
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
      <table border="1">
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
