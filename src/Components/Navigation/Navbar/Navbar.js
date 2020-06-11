import React from 'react';
import classes from './Navbar.module.css';
import Links from '../../Link/Link';
import Logo from '../../../assets/crown.svg'
import Cart from '../../../assets/shopping-bag.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Navbar = (props) => {
    console.log(props)
    const userState = props.currentUser === null ?
        <Links name='SIGN IN' /> :
        <p className={classes.signOut} onClick={() => auth.signOut()}>
            SIGN OUT
        </p>;

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to="/">
                    <img src={Logo} alt="#" />
                </Link>
            </div>
            <div className={classes.link}>
                <Links name='SHOP' />
                <Links name='CONTACT' />
                {userState}
            </div>
            <div className={classes.cart}>
                <img alt="#" src={Cart} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);