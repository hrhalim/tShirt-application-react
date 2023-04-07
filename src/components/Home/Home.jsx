import React from 'react'; 
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div className='tshirt-wrapper'>
            <div className='tshirt-left'>
                {
                 tShirts.map(tShirt => <Tshirt
                  tShirt={tShirt}
                  key={tShirt._id}
                 ></Tshirt>)
                }
            </div>
            <div className='tshirt-right'>
            <Cart></Cart>
            </div>
           
        </div>
    );
};

export default Home;