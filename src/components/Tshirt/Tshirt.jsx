import React from 'react';

const Tshirt = ({tShirt, handleCart}) => {
    const {name, picture, gender, price} = tShirt;
    return (
        <div className='single-tshirt'>
            <img src={picture} alt="Image" />
            <h2>{name}</h2>
             <p>Price: ${price}</p>
             <p>{gender ? gender : "No Found"}</p>
             <button onClick={() => handleCart(tShirt)} className='btn-buynow'>Buy Now</button>
        </div>
    );
};

export default Tshirt;