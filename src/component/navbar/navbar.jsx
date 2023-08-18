import React from 'react';
//import ReactDOM from 'react-dom/client';
import Logo from '../Logo/companylogo';
import './navbar.css';
import Bfeedback from '../Bfeedback/Bfeedback';
import Searchbar from '../Searchbar/search'


function Navbar() {
  return (
    <nav className='Navbar'>
        <Logo />
        <Searchbar />
        <Bfeedback/>
        
    </nav>
  );
}

export default Navbar;
