import React from 'react';
import classes from './Navbar.module.css';
import Links from '../../Link/Link';
import Logo from '../../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Carticon from '../../Carticon/Carticon';

const Navbar = (props) => {
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
            <Carticon />
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);