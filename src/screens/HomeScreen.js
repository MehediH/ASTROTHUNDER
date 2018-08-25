import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div className="app">
            <div className="wrapper">
                <header>
                    <h1><Link to="/">built by meh</Link></h1>
                    <div>
                        <span></span><span class="alt"></span>
                    </div>
                </header>
                
                
            
            </div>

            <div className="background-overlay">
                {
                    [...Array(50)].map((e, i) => <span></span>)
                }
            </div>
        </div>
    )
  }
}
