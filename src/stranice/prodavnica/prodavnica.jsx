import React from "react";
import { PRODUCTS } from "../../products";
import { ProdavnicaProizvod } from "./prodavnica-proizv";
import "./prodavnica.css";

export const Prodavnica = () => {
  return (
    <div className="prodavnica">
      <div className="prod">
        <h2> Nega lica i tela </h2>
      </div>
      <div className="proizvodi">
        {PRODUCTS.map((product) => (
          <ProdavnicaProizvod data={product} />
        ))}
      </div>
    </div>
  );
};

//export default Shop;
