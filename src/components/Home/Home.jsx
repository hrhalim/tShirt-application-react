import React, { useState } from 'react'; 
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css' 
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const handleCart = (tShirt) => {
        const exits = cart.find(tshirt => tshirt._id === tShirt._id);
        if(exits){
            toast("You have alrady added T-Shirt");
        }else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }

    }

    const handleRemoveCart = (id) => {
        const remainCart = cart.filter(tshirt => tshirt._id !== id); 
        setCart(remainCart);
    }

    return (
        <div className='tshirt-wrapper'>
            <div className='tshirt-left'>
                {
                 tShirts.map(tShirt => <Tshirt
                  tShirt={tShirt}
                  key={tShirt._id}
                  handleCart={handleCart}
                 ></Tshirt>)
                }
                <ToastContainer />
            </div>
            <div className='tshirt-right'>
            <Cart 
            cart={cart}
            handleRemoveCart={handleRemoveCart}
            
            ></Cart>
            </div>
           
        </div>
    );
};

export default Home;