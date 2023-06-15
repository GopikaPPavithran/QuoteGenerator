import React, {useState, useEffect} from 'react';
import './App.css';
// import { useNavigate } from 'react-router-dom';    <button className='navbutl'>      Home</button>   

function Navbar(){

    return(
        <div className='navbar'>
            <div className='items'>
                <a href="#" className='navbutl'>Home</a>
                <a href="#" className='navbutr'>Bookmark</a>
            </div>

        </div>
    );
}


export default Navbar;