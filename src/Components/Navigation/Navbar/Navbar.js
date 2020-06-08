import React from 'react';
import classes from './Navbar.module.css';
import Link from '../../Link/Link';
import Logo from '../../../assets/crown.svg'
import Cart from '../../../assets/shopping-bag.svg'

const Navbar = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={Logo} alt="#" />
            </div>
            <div className={classes.link}>
                <Link  name='SHOP' />
                <Link name='CONTACT' />
                <Link name='SIGN IN' />
            </div>
            <div className={classes.cart}>
                <img alt="#" src={Cart} />
            </div>
        </div>
    )
}
export default Navbar;