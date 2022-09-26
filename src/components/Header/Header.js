import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
            <a className='menu-btn' href="/menu"> <FontAwesomeIcon icon={faBars} /> </a>
        </nav>
    );
};

export default Header;