import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../prodavnica/prodavnica";
import { ShopContext } from "../../context/shop-context";
import { KorpaProizvod } from "./korpa-proizv";
import "./korpa.css";
import { useNavigate } from "react-router-dom";

export const Korpa = () => {
  const { korpaProizvodi, ukupnaSuma } = useContext(ShopContext);
  const total = ukupnaSuma();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1> Dodati proizvodi </h1>
      </div>
      <div className="proizvodiKorpa">
        {PRODUCTS.map((product) => {
          if (korpaProizvodi[product.id] !== 0) {
            return <KorpaProizvod data={product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="plati">
          <p>Ukupno: {total} din</p>
          <button onClick={() => navigate("/")}>Nastavi sa kupovinom</button>
          <button>Plati</button>
        </div>
      ) : (
        <h1> Nema proizvoda u korpi </h1>
      )}
    </div>
  );
};

//export default Cart;
