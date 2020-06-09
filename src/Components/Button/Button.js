import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <div className={classes.wrapper}>
            <button
                className={classes.button}
                onClick={() => props.handle()}
                style={props.style}>
                {props.name}
            </button>
        </div>
    )
}

export default Button;