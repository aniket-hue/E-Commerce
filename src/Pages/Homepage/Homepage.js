import React from 'react'
import Card from '../../Components/Card/Card'
import classes from './Homepage.module.css';

const Homepage = (props) => {
    return (
        <div>
            <div className={classes.card}>
                <Card size={32.2} type='hats' />
                <Card size={32.2} type='jackets' />
                <Card size={32.2} type='sneakers' />
            </div>
            <div className={classes.card2}>
                <Card size={49} type='womens' />
                <Card size={49} type='mens' />
            </div>
        </div>
    );
}
export default (Homepage);
