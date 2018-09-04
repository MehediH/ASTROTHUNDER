import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {

  render() {
    return (
        <div className="content">
            <header>
                <h1><Link to="/">built by meh.</Link></h1>
                <div>
                    <span></span><span className="alt"></span>
                </div>
            </header>
            
            <div className="main">
                <div className="hero">
                    <h1 className="hi">hi! i'm mehedi.</h1>
                    <h1>a creative designer, developer based in london.</h1>
                    <h2>i craft beautiful, robust, and effortless web-based experiences.</h2>
                    <Link to="/services" className="services card">see what i do <span className="arrow">-></span></Link>
                </div>

                <div className="children">
                    <Link to="./projects">
                        <div className="projects card">
                            <h2>view my projects</h2>
                        </div>
                    </Link>

                    <Link to="./contact">
                        <div className="contact card">
                            <h2>let's work together</h2>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
  }
  
}
