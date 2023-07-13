import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const KorpaProizvod = (props) => {
  const { id, nazivPr, cena, slikaPr } = props.data;
  const { korpaProizvodi, dodajUKorpu, izbaciIzKorpe, updateKorpaCount } =
    useContext(ShopContext);
  return (
    <div className="proizvodKorpa">
      <img src={slikaPr} />
      <div className="opis">
        <p>
          <b>{nazivPr}</b>
        </p>
        <p>{cena} din</p>
        <div className="countHandler">
          <button onClick={() => izbaciIzKorpe(id)}> - </button>
          <input
            value={korpaProizvodi[id]}
            onChange={(e) => updateKorpaCount(Number(e.target.value), id)}
          />
          <button onClick={() => dodajUKorpu(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
