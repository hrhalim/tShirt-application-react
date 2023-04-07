import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
        <div className='header'>
            <div>
               <h1> <Link to="/">T-Shirt</Link></h1>
            </div>
            <ul className='menu'>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/service">Service</Link>
             <Link to="/blog">Blog</Link>
            </ul> 
        </div>
    );
};

export default Header;