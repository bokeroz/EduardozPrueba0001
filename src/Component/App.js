import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './Adduser';
import Addpost from './Part/Post/AddPost';
import Login from './login/Login';
import Edit from './Edituser';
import EditPost from './Part/Post/EditPost';

import ListUsers from './Part/ListUsers';


class App extends Component {
  
  render() {
    /* <Link to={'/'}>Home</Link> */
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/addpost' component={Addpost} />            
            <Route exact path='/edit/:id' component={Edit} />
            <Route exact path='/editpost/:id' component={EditPost} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/listusers' component={ListUsers} /> 

          </Switch>
      </Router>
    );
  }
}
export default App;