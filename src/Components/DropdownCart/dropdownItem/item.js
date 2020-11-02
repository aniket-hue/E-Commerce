import React from 'react';
import { connect } from 'react-redux';
import classes from './item.module.css';

const item = (props) => {
    let itemToAdd = props.cartItems.map(item =>
        (
            <div key={item.id} className={classes.wrapper}>
                <img className={classes.img} src={item.image} />
                <div className={classes.desc}>
                    <p>{item.name}</p>
                    <p>{item.count} X ${item.price}</p>
                </div>
            </div>
        )
    )
    return (
        <div >
            {itemToAdd}
        </div>

    )       
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(item);