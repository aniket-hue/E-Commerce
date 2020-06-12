import React from 'react'
import Cart from '../../assets/shopping-bag.svg';
import classes from './Carticon.module.css';
import { connect } from 'react-redux';
import { setCartVisiblity } from '../../redux/Cart/cartAction'
const Carticon = (props) => {
    console.log(props)
    const onCartClick = () => {
        props.dropdownToggle();
    }
    return (
        <div className={classes.cart}>
            <p>{props.count.length}</p>
            <img onClick={onCartClick} src={Cart} alt='#' />
        </div>
    )
}

const mapStateToProps = (state) => (
    { count: state.cart.cartItems.length }
)

const mapDispatchToProps = (dispatch) => {
    return {
        dropdownToggle: () => (dispatch(setCartVisiblity()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);