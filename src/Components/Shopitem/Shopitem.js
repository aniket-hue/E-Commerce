import React from 'react';
import classes from './Shopitem.module.css';
import Sampleitem from '../Sampleitem/Sampleitem';

const Shopitem = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.name}>{props.type.toUpperCase()}</div>
            <Sampleitem name={props.type} amount={props.amount} />
        </div>
    )
}
export default Shopitem