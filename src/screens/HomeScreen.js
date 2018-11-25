import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';

export default class HomeScreen extends Component {
  componentWillMount(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var elemProps = generateBG(width, height, false);

    this.setState({
        ...elemProps
    })

    window.addEventListener('resize', () => {
        if(width != window.innerWidth){
            var elemProps = generateBG(window.innerWidth, window.innerHeight, true);
    
            this.setState({
                ...elemProps
            })
        }
    })
  }

  render() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <header>
                    <h1><Link to="/">built by meh.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="main site-cont">
                    <div className="hero">
                        <h1 className="hi">hi! i'm mehedi.</h1>
                        <h1>a creative designer, developer based in london.</h1>
                        <h2>i build beautiful, robust, and effortless web-based experiences.</h2>
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

            <div className={"background-overlay anim " + this.state.resize } style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
            
           </React.Fragment>
    )
  }
}
