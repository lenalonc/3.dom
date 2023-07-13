import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const ProdavnicaProizvod = (props) => {
  const { id, nazivPr, cena, slikaPr } = props.data;
  const { dodajUKorpu, korpaProizvodi } = useContext(ShopContext);

  const kolicina = korpaProizvodi[id];

  return (
    <div className="proizvod">
      <img src={slikaPr} />
      <div className="description">
        <p>
          <b>{nazivPr}</b>
        </p>
        <p>{cena} din.</p>
      </div>
      <button className="dodajBttn" onClick={() => dodajUKorpu(id)}>
        Dodaj {kolicina > 0 && <>({kolicina})</>}
      </button>
    </div>
  );
};
