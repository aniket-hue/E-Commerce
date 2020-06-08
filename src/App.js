import React from 'react';
import classes from './App.module.css';
import Homepage from './Pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './Pages/Shop/Shop';

function App(props) {
  console.log(props)
  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
      <Switch>
        <Route exact path='/shop/man' />
        <Route exact path='/shop/woman' />
        <Route exact path='/shop/sneakers' />
        <Route exact path='/shop/jackets' />
        <Route exact path='/shop/hats' />
      </Switch>


    </div>
  );
}

export default App;
