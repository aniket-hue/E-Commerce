import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/userActions'
import classes from './App.module.css';
import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import Categories from './Pages/Categories/Categories';
import Navbar from './Components/Navigation/Navbar/Navbar';
import Signin from './Pages/Signin/Signin';
import Dropdown from './Components/DropdownCart/Dropdown';
import Checkout from './Pages/Checkout/Checkout';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.setCurrentUser(user)
      this.props.history.push('/')
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={classes.App}>
        <Navbar />

        {this.props.isToggled || <Dropdown />}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/shop/:category' render={() => <Categories />} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  isToggled: state.cart.hideCart
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
