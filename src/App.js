import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';


function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user is: ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout' >
            <Checkout />
          </Route>
          <Route path='/'  >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
