import React from 'react';

const Tshirt = ({tShirt}) => {
    const {name, picture, gender, price} = tShirt;
    return (
        <div className='single-tshirt'>
            <img src={picture} alt="Image" />
            <h2>{name}</h2>
             <p>Price: ${price}</p>
             <p>{gender ? gender : "No Found"}</p>
             <button className='btn-buynow'>Buy Now</button>
        </div>
    );
};

export default Tshirt;