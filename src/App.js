import React, { Component } from 'react';
import './styles/app.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
 
import Home from './screens/HomeScreen.js';
import Projects from './screens/ProjectsScreen.js';
import Project from './screens/ProjectScreen.js';
import Contact from './screens/ContactScreen.js';
import FourOhFour from './screens/404Screen.js';
import AboutMe from './screens/AboutMe.js';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/projects/:project" component={Project}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/meh" component={AboutMe}/>
          <Route component={FourOhFour}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
