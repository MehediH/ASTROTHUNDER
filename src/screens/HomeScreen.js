import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div>
            <div className="meta">
                <h1>
                    <Link to="./">inspect element</Link>
                </h1>
                <p>a creative design studio based in london.</p>
                <p className="sub">we craft beautiful, robust, and effortless web-based experiences for businesses.</p>
            </div>
            <span className="contact">
                <Link to="./projects">view our work</Link>
                <span> // </span>
                <a href="mailto:meh@inspectelement.io"> let's work together -></a>
            </span>
        </div>
    )
  }
}
