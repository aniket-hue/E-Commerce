import React from 'react'
import Shopitem from '../../Components/Shopitem/Shopitem';
import classes from './Shop.module.css';


const Shop = (props) => {
    return (
        <div>
            <h1 className={classes.h1}>Collections</h1>
            <Shopitem type="hats" amount={4} />
            <Shopitem type="sneakers" amount={4} />
            <Shopitem type="jackets" amount={4} />
            <Shopitem type="womens" amount={4} />
            <Shopitem type="mens" amount={4} />
        </div>
    );
}

export default Shop;