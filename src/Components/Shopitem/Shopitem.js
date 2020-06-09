import React from 'react';
import classes from './Shopitem.module.css';
import Sampleitem from '../Sampleitem/Sampleitem';
import { Link } from 'react-router-dom';

const Shopitem = (props) => {
    return (
        <div className={classes.container}>

            <Link
                to={`/shop/${props.type}`}
                style={{ textDecoration: "none", color: "black" }}>
                
                <div className={classes.name}>{props.type.toUpperCase()}</div>

            </Link>

            <Sampleitem name={props.type} amount={props.amount} />
            
        </div>
    )
}
export default Shopitem