import React, { Component } from 'react';
import Forminput from '../../Components/Forminput/Forminput'
import classes from './Signin.module.css';
import Button from '../../Components/Button/Button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class Signin extends Component {
    state = {
        password: '',
        email: '',
        passwordForSignup: '',
        emailForSignup: '',
        name: null,
        confirmPassword: ''
    }


    handleSignInUp = (type, e) => {
        this.setState({ [type]: e.target.value });


    }

    onSubmitHandle = async () => {
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({ email: '', password: '' })
        }
        catch (error) {

        }
    }

    onSignupHandle = async () => {
        try {
            if (this.state.password !== this.state.confirmPassword)
                alert("Retype Password")
            await auth.createUserWithEmailAndPassword(this.state.emailForSignup, this.state.confirmPassword);
            this.setState({ emailForSignup: '', passwordForSignup: '', name: '', confirmPassword: '' })
        }
        catch (error) {

        }
    }



    render() {
        console.log(this.state)
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
                            handle={(e) => this.handleSignInUp("email", e)} />
                    </div>
                    <div className={classes.input2}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Password"
                            handle={(e) => this.handleSignInUp("password", e)} />
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
                        <Forminput
                            name="tezt"
                            type="text"
                            label="Display Name"
                            handle={(e) => this.handleSignInUp("name", e)}
                        />
                    </div>
                    <div className={classes.input}>
                        <Forminput
                            name="email"
                            type="email"
                            label="Email"
                            handle={(e) => this.handleSignInUp("emailForSignup", e)} />
                    </div>
                    <div className={classes.input}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Password"
                            handle={(e) => this.handleSignInUp("passwordForSignup", e)} />
                    </div>
                    <div className={classes.input2}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Confirm Password"
                            handle={(e) => this.handleSignInUp("confirmPassword", e)} />
                    </div>
                    <div className={classes.button}>
                        <Button name='SIGN IN'
                            style={
                                {
                                    background: "black",
                                    color: "white",
                                    border: "1px solid black",
                                    width: "200px",
                                }
                            }
                            handle={this.onSignupHandle}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;