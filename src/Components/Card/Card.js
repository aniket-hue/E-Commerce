import React from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'

// 32.2%
const Card = props => {
    const style = {
        backgroundImage: `url(${require(`../../assets/cards/${props.type}.jpg`)})`,
        flexBasis: `${props.size}%`
    }
    return (
        <div className={classes.wrapper} style={style} >
            <Link to={`/shop/${props.type}`} className={classes.name}>
                <p className={classes.type}>{props.type}</p>
                <p className={classes.shop}>SHOP NOW</p>
            </Link>
        </div>
    )
}

export default Card;