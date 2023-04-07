import React from 'react';
import './style/Home.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}  className='btn-buy-now'>X</button></p>)
            }
        </div>
    );
};

export default Cart;