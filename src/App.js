import React, { Component } from 'react';
import classes from './App.module.css';
import Homepage from './Pages/Homepage/Homepage';
import { Route, Switch, withRouter } from 'react-router-dom'
import Shop from './Pages/Shop/Shop';
import Categories from './Pages/Categories/Categories';
import Navbar from './Components/Navigation/Navbar/Navbar';
import Signin from './Pages/Signin/Signin';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
    
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      this.props.history.push('/')
    })
  }
  
  handleSignOut() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    console.log(this.props);
    return (
      <div className={classes.App}>
        <Navbar currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/shop/:category' render={() => <Categories />} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </div>
    );
  }
  
}

export default withRouter(App);
