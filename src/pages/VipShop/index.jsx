import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import data from '../../utils/lista_items.json';

import * as S from './styles';

const DISCORD_URL = "https://discord.gg/H7DDngevBC";

function VipShop () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const result = data.sort((a, b) => a.quant > b.quant ? 1 : -1);
    setItems(result);
  }, []);
  return (
    <S.Container>
      <Header />
      <div className="main">
        <div className="contexto">
          <h1>VIP Shop</h1>
          <p>Atualmente a loja ainda está em construção, então caso queria ajudar o jogo donatando acesse nosso
            {' '}
          <a 
            href={DISCORD_URL}
            target="_blank" rel="noreferrer"
          >
          discord
          </a> e contate algum dos ADM.
          </p>
          <p>CUIDADO! Nenhum ADM ou STAFF irá te pedir informação pessoal, alêm de comprovante de pagamento.</p>
          <p>1 dimante (popularmente chamado de dd) equivale a 1 real.</p>
        </div>
        <div className="tabela">
          <table>
              <thead>
                <tr>
                  <th>DESCRIÇÃO</th>
                  <th>VALOR (EM DDs)</th>
                  <th>COMANDO</th>
                </tr>
              </thead>
              <tbody>
              {items && items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td>{item.cmd}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
        </div>
      </div>
    </S.Container>
  );
}

export default VipShop;
