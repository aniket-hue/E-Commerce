import React from 'react'
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import Card from '../../Components/Card/Card'
import classes from './Homepage.module.css';
// import { Route, Switch, withRouter } from 'react-router-dom'

const Homepage = (props) => {
    console.log(props)
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
// export default withRouter(Homepage);