import React, { Component } from 'react';
import './styles/app.scss';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

 
import Home from './screens/HomeScreen.js';
import Projects from './screens/ProjectsScreen.js';
import Project from './screens/ProjectScreen.js';
import Services from './screens/ServicesScreen.js';
import Contact from './screens/ContactScreen.js';
import FourOhFour from './screens/404Screen.js';


class About extends Component{
  render() {
    return (
      <div>about</div>
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
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>
          <Route component={FourOhFour}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
