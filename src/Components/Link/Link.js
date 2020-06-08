import React from 'react';
import classes from './Link.module.css';
import { Link } from 'react-router-dom';


const link = (props) => {
    const name_of_link = props.name.toLowerCase().split(" ").join("");
    return (
        <div className={classes.wrapper}>
            <Link to={`/${name_of_link}`} style={{textDecoration:"none"}}><p>{props.name}</p></Link>
        </div>
    )
}

export default link;