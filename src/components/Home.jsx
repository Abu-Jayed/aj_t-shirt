import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./Cart";
import "./style/Home.css";
const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (tshirt) => {
    const newCart = [...cart, tshirt]
    setCart(newCart)
  };
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tShirts.map((tshirt) => (
          <TShirt tshirt={tshirt} key={tshirt._id} handleAddtoCart={handleAddtoCart}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
