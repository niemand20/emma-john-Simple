import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/inventory">Manage </a>
            </nav>
        </div>
        
    );
};

export default Header;