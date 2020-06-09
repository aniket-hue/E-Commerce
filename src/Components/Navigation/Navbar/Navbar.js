import React from 'react';
import classes from './Navbar.module.css';
import Links from '../../Link/Link';
import Logo from '../../../assets/crown.svg'
import Cart from '../../../assets/shopping-bag.svg'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to ="/">
                    <img src={Logo} alt="#" />
                </Link>
            </div>
            <div className={classes.link}>
                <Links name='SHOP' />
                <Links name='CONTACT' />
                <Links name='SIGN IN' />
            </div>
            <div className={classes.cart}>
                <img alt="#" src={Cart} />
            </div>
        </div>
    )
}
export default Navbar;