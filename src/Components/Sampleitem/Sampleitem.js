import React from 'react'
import classes from './Sampleitem.module.css'
import SHOP_DATA from '../../assets/Shopdata';
import { connect } from 'react-redux';
import { setCartItem } from '../../redux/Cart/cartAction'
const Sampleitem = (props) => {

    const onPay = (id, type, url) => {
        props.setItem({
            id: id,
            type: type,
            image: url
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
                                onClick={() => onPay(data.id, props.name, data.imageUrl)}
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