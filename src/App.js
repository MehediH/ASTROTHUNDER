import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/app.scss';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

 
import Home from './screens/HomeScreen.js';
import Projects from './screens/ProjectsScreen.js';
import Project from './screens/ProjectScreen.js';


class About extends Component{
  render() {
    return (
      <div>about</div>
    )
  }
}


class NoMatch extends Component{
  render() {
    return (
      <div>404</div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/projects/:project" component={Project}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
