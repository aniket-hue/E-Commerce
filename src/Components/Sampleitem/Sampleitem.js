import React from 'react'
import classes from './Sampleitem.module.css'
import SHOP_DATA from '../../assets/Shopdata';
import { connect } from 'react-redux';
import { setCartItem } from '../../redux/Cart/cartAction'
const Sampleitem = (props) => {

    const onPay = (name,id, type, url, price) => {
        props.setItem({
            name: name,
            id: id,
            type: type,
            image: url,
            price: price
        })
    }
    const element = SHOP_DATA.map(data => {

        if (data.routeName === props.name) {
            let idx = 0;
            return data.items.map(data => {
                return (
                    idx++ < props.amount ?
                        <div key={data.id} className={classes.wrapper} >
                            <div
                                onClick={() =>onPay(data.name, data.id, props.name, data.imageUrl, data.price)}
                                className={classes.img}
                                style={{ backgroundImage: `url(${data.imageUrl})` }}>
                                <p className={classes.paybadge}><br />Proceed to pay</p>
                            </div>
                            <div className={classes.desc}>
                                <p className={classes.name}>{data.name}</p>
                                <p className={classes.price}>{`${data.price} $`}</p>
                            </div>
                        </div > : null
                )
            })
        }
        else
            return null
    })
    // console.log(element/)
    return (
        <div className={classes.container} >
            {element}
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    setItem: item => dispatch(setCartItem(item))
})


export default connect(null, mapDispatchToProps)(Sampleitem);