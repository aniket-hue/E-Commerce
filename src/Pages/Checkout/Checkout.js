import React from 'react'
import { connect } from 'react-redux'
import classes from './Checkout.module.css'
import { removeItem } from '../../redux/Cart/cartAction';
const Checkout = (props) => {

    const onRemove = (id) => {
        props.removeItem(id);
    }

    const rows = props.items.map(item => (
        <tbody key={item.id}>
            <tr >
                <td><img src={item.image} /></td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.price * item.count}</td>
                <td>
                    <span onClick={() => onRemove(item.id)} className={classes.remove}>&#10005;</span>
                </td>
            </tr>
        </tbody>
    )
    )
    console.log(rows)
    return (
        <table className={classes.table} style={{ width: "100%" }}>
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </tbody>
            {rows}
        </table>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: item => (dispatch(removeItem(item)))
})
const mapStateToProps = (state) => ({
    items: state.cart.cartItems
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)