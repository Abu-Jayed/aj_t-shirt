import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./Cart";
import "./style/Home.css";
import toast from 'react-hot-toast';

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (tshirt) => {
    const exists = cart.find(ts => ts._id === tshirt._id)
    if(exists){
      toast('You already add it.')
    }else{
      const newCart = [...cart, tshirt]
      setCart(newCart)
    }
  };

  const handleRemoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id)
    setCart(remaining)
  }


  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tShirts.map((tshirt) => (
          <TShirt tshirt={tshirt} key={tshirt._id} handleAddtoCart={handleAddtoCart}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
