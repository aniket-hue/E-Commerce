import React from 'react'
import classes from './Dropdown.module.css'
import Item from './dropdownItem/item'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCartVisiblity } from '../../redux/Cart/cartAction';

const Dropdown = (props) => {
    return (
        <div className={classes.wrapper}>
            <Item />
            <Link to='/checkout' className={classes.checkout} onClick={() => props.toggle()}>
                CHECKOUT
            </Link>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(setCartVisiblity())
})
export default connect(null, mapDispatchToProps)(Dropdown);