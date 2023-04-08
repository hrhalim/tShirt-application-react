import React from 'react'; 
import './Cart.css'

const  Cart = ({cart, handleRemoveCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    } else {
        message = <p>Thanks for buying our Product</p>
    }
    return (
        <div className='order-box'>
            <h2 className={cart.length === 0 ? 'red' : 'white'}>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>You have 30% off</span> : <span>Please buying min 3 product</span>}
            {message}
             {
                cart.map((tshirt, index) => <p key={index}>
                    {tshirt.name}
                    
                <button onClick={() => handleRemoveCart(tshirt._id)}
                >Delete</button>
                </p>)
             }
             
             {
                cart.length === 2 && <p>You have 50% off</p>
             }
             {
                cart.length === 3 || <p>Aadded 3 products</p>
             }
        </div>
    );
};

export default Cart;