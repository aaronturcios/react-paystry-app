
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
 
import Home from './Home';
import Properties from './Properties';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
 
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:8000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/properties">Properties</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/register">Register</NavLink>
          </div>

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/properties" component={Properties} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;