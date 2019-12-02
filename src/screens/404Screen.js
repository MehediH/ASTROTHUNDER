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
        <div className="app fof">
            <Helmet>
                <title>it's a 404 // mehedi hassan.</title>
            </Helmet>

            <h1 className="four">it's a 404<Link to="/">let's go back home <span className="arrow">-></span></Link></h1>

            <div className={"background-overlay 404 anim " + this.state.resize } style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
        </div>
    )
  }
}
