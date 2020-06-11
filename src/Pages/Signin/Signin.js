import React, { Component } from 'react';
import Forminput from '../../Components/Forminput/Forminput'
import classes from './Signin.module.css';
import Button from '../../Components/Button/Button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { authAction } from '../../redux/Auth/authActions';

class Signin extends Component {
    stateDispatchHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                this.props.email(e.target.value)
                break;
            case 'password':
                this.props.password(e.target.value)
                break;
            case 'emailForSignup':
                this.props.emailForSignup(e.target.value)
                break;
            case 'passwordForSignup':
                this.props.passwordForSignup(e.target.value)
                break;
            case 'name':
                this.props.name(e.target.value)
                break;
            case 'confirmPassword':
                this.props.confirmPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    onSignInHandle = async () => {
        try {
            await auth.signInWithEmailAndPassword(this.props.emailValue, this.props.passwordValue);
            this.props.email('')
            this.props.password('')
        }
        catch (error) {

        }
    }

    onSignupHandle = async () => {
        try {
            if (this.props.passwordValue !== this.props.confirmPasswordValue)
                alert("Retype Password")
            await auth.createUserWithEmailAndPassword(this.props.emailForSignupValue, this.props.confirmPasswordValue);
            this.props.emailForSignup('')
            this.props.passwordForSignup('')
            this.props.name('')
            this.props.confirmPassword('')
            this.props.confirmPassword('')

        }
        catch (error) {

        }
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.form}>
                    <h2>I already have an account</h2>
                    <h4>Sign in with your email and password</h4>
                    <div className={classes.input}>
                        <Forminput
                            name="email"
                            type="email"
                            label="Email"
                            handle={this.stateDispatchHandle} />
                    </div>
                    <div className={classes.input2}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Password"
                            handle={this.stateDispatchHandle} />
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
                            handle={this.onSignInHandle}
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
                            handle={this.stateDispatchHandle}
                        />
                    </div>
                    <div className={classes.input}>
                        <Forminput
                            name="email"
                            type="email"
                            label="Email"
                            handle={this.stateDispatchHandle} />
                    </div>
                    <div className={classes.input}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Password"
                            handle={this.stateDispatchHandle} />
                    </div>
                    <div className={classes.input2}>
                        <Forminput
                            name="password"
                            type="password"
                            label="Confirm Password"
                            handle={this.stateDispatchHandle} />
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

const mapDispatchToProps = (dispatch) => ({
    password: (value) => dispatch(authAction.password(value)),
    email: (value) => dispatch(authAction.email(value)),
    emailForSignup: (value) => dispatch(authAction.emailForSignup(value)),
    passwordForSignup: (value) => dispatch(authAction.passwordForSignup(value)),
    name: (value) => dispatch(authAction.name(value)),
    confirmPassword: (value) => dispatch(authAction.confirmPassword(value)),
})

const mapStateToProps = (state) => {
    return {
        emailValue: state.auth.email,
        passwordValue: state.auth.password,
        emailForSignupValue: state.auth.emailForSignup,
        passwordForSignupValue: state.auth.passwordForSignup,
        nameValue: state.auth.name,
        confirmPasswordValue: state.auth.confirmPassword,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);