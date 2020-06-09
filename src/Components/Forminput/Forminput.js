import React from 'react'
import classes from './Forminput.module.css';
const Forminput = (props) => {
    return (
        <div className={classes.wrapper}>
            {/* <label className={classes.label} >{props.label}</label> */}
            <input className={classes.input}
                type={props.type}
                name={props.name}
                placeholder={props.label}
                onChange={props.handle}
            />
        </div>
    )
}

export default Forminput;
