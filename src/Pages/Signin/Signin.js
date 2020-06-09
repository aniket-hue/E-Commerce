import React, { Component } from 'react';
import Forminput from '../../Components/Forminput/Forminput'
import classes from './Signin.module.css';
import Button from '../../Components/Button/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {
    state = {
        password: '',
        email: '',
    }

    handleSignIn = (type, e) => {
        this.setState({ [type]: e.target.value });
    }

    onSubmitHandle = () => {
        this.setState({ email: '', password: '' })
    }



    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.form}>
                    <h2>I already have an account</h2>
                    <h4>Sign in with your email and password</h4>
                    <div className={classes.input}>
                        <Forminput
                            name="name"
                            type="email"
                            label="Email"
                            handle={(e) => this.handleSignIn("email", e)} />
                    </div>
                    <div className={classes.input2}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Password"
                            handle={(e) => this.handleSignIn("password", e)} />
                    </div>
                    <div className={classes.button}>
                        <Button name='SIGN IN'
                            style={
                                {
                                    background: "white",
                                    color: "black",
                                    border: "1px solid black",
                                    width: "200px"
                                }

                            }
                            handle={this.onSubmitHandle}
                        />
                        <Button name='SIGN IN WITH GOOGLE'
                            style={
                                {
                                    background: "#4285f4",
                                    color: "white",
                                    border: "1px solid #4285f4",
                                    width: "260px"
                                }
                            }
                            handle={signInWithGoogle}
                        />
                    </div>
                </div>
                <div className={classes.form}>
                    <h2>I already have an account</h2>
                    <h4>Sign in with your email and password</h4>
                    <div className={classes.input}>
                        <Forminput name="name" type="text" label="Display Name" />
                    </div>
                    <div className={classes.input}>
                        <Forminput name="email" type="email" label="Email" />
                    </div>
                    <div className={classes.input}>
                        <Forminput name="password" type="password" label="Password" />
                    </div>
                    <div className={classes.input2}>
                        <Forminput name="password" type="password" label="Confirm Password" />
                    </div>
                    <div className={classes.button}>
                        <Button name='SIGN IN'
                            style={
                                {
                                    background: "black",
                                    color: "white",
                                    border: "1px solid black",
                                    width: "200px"
                                }
                            } />
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;