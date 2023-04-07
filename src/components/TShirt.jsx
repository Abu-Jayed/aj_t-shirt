import React from 'react';
import './style/TShirt.css'

const TShirt = ({tshirt, handleAddtoCart}) => {
    const {name,price,picture,_id} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price ${price}</p>
            <button onClick={()=>handleAddtoCart(tshirt)} className='btn-buy-now'>Buy Now</button>
        </div>
    );
};

export default TShirt;