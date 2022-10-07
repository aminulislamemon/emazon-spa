import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <a className='menu-btn' href="/menu"> <FontAwesomeIcon icon={faBars} /> </a>
        </nav>
    );
};

export default Header;