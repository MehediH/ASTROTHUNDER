import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div className="app">
            <div className="wrapper">
                <header>
                    <h1><Link to="/">mehedi hassan</Link></h1>
                    <div>
                        <span></span><span class="alt"></span>
                    </div>
                </header>
                
                <div className="ratchet">
                    <div className="hey-how-are-you">
                        <h1>a creative designer/developer based in london.</h1>
                        <h2>i craft beautiful, robust, and effortless web-based experiences.</h2>
                    </div>

                    <div className="nice-smort">
                        <Link to="./projects">
                            <div className="i-am-good">
                                <h2>see my projects</h2>
                            </div>
                        </Link>

                        <Link to="./contact">
                            <div className="how-about-you">
                                <h2>let's work together.</h2>
                            </div>
                        </Link>
                    </div>
                </div>

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
