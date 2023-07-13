import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
//to organize my data
const getDefaultKorpa = () => {
  let korpa = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    korpa[i] = 0;
  }
  return korpa;
};

export const ShopContextProvider = (props) => {
  const [korpaProizvodi, setkorpaProizvodi] = useState(getDefaultKorpa());

  const ukupnaSuma = () => {
    let ukupno = 0;
    for (const proizvod in korpaProizvodi) {
      if (korpaProizvodi[proizvod] > 0) {
        let proizvodInfo = PRODUCTS.find(
          (product) => product.id === Number(proizvod)
        );
        ukupno += korpaProizvodi[proizvod] * proizvodInfo.cena;
      }
    }
    return ukupno;
  };

  const dodajUKorpu = (proizvodId) => {
    setkorpaProizvodi((prev) => ({
      ...prev,
      [proizvodId]: prev[proizvodId] + 1,
    }));
  };
  const izbaciIzKorpe = (proizvodId) => {
    setkorpaProizvodi((prev) => ({
      ...prev,
      [proizvodId]: prev[proizvodId] - 1,
    }));
  };

  const updateKorpaCount = (novaKol, proizvodId) => {
    setkorpaProizvodi((prev) => ({ ...prev, [proizvodId]: novaKol }));
  };

  const contexValue = {
    korpaProizvodi,
    dodajUKorpu,
    izbaciIzKorpe,
    updateKorpaCount,
    ukupnaSuma,
  };

  return (
    <ShopContext.Provider value={contexValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
