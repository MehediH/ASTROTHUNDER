import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";

export default class HomeScreen extends Component {
  componentWillMount(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var elemProps = generateBG(width, height, false);

    this.setState({
        ...elemProps
    })

    let resized = false
    window.addEventListener('resize', () => {
        if(!resized){
            resized = true;

            if(width !== window.innerWidth || height !== window.innerHeight){
                var elemProps = generateBG(window.innerWidth, window.innerHeight, true);
        
                this.setState({
                    ...elemProps
                })
            }
        }
        
    })
  }

  render() {
    return (
        <React.Fragment>
            <Helmet>
                <title>mehedi hassan.</title>
                <meta name="description" content="A creative designer and developer based in London." />
            </Helmet>

            <div className="wrapper">
                <header>
                    <Link to="/"><h1>mehedi hassan.</h1></Link>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="main site-cont">
                    <div className="hero">
                        <h1 className="hi">hi! i'm mehedi.</h1>
                        <h1>a compsci undergrad, software engineer, and designer based in london.</h1>
                        <h2>i love solving problems, building products that tackle real-life challenges, and designing intuitive experiences.</h2>
                        <Link to="/contact" className="services card">more about me <span className="arrow">-></span></Link>
                    </div>

                    <div className="children">
                        <div class="socials">
                            <a target="_blank" href="https://github.com/MehediH">GitHub</a>
                            <a target="_blank" href="https://www.linkedin.com/in/meh-hassan/">LinkedIn</a>
                        </div>
                        <Link to="./projects">
                            <div className="projects card">
                                <h2>view my projects</h2>
                            </div>
                        </Link>

                        <Link to="./meh">
                            <div className="contact card">
                                <h2>personal details</h2>
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
