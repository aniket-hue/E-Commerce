import React from 'react'
import classes from './Sampleitem.module.css'
import SHOP_DATA from '../../Components/Shopdata';
const Sampleitem = (props) => {


    const element = SHOP_DATA.map(data => {

        if (data.routeName === props.name) {
            let idx = 0;
            return data.items.map(data => {
                return (
                    idx++ < props.amount ?
                        <div key={data.id} className={classes.wrapper} >
                            <div
                                className={classes.img}
                                style={{ backgroundImage: `url(${data.imageUrl})` }}>
                                <p className={classes.paybadge}><br/>Proceed to pay</p>
                            </div>
                            <div className={classes.desc}>
                                <p className={classes.name}>{data.name}</p>
                                <p className={classes.price}>{`${data.price} $`}</p>
                            </div>
                        </div > : null
                )
            })
        }
    })
    return (
        <div className={classes.container} >
            {element}
        </div>
    )
}
export default Sampleitem;