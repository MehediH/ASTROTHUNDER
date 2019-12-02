import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";

export default class ServicesSccreen extends Component {

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
            <div className="wrapper">
                <Helmet>
                    <title>services // mehedi hassan.</title>
                    <meta name="description" content="I design beautiful interfaces, build functional websites and apps, and more." />
                </Helmet>
                <header>
                    <h1><Link to="/">mehedi hassan.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="page-services site-cont">
                    <ul>
                        <li>
                            <h2>interface design</h2>
                            <p>i design interfaces. not your run-of-the-mill interfaces. unique interfaces. the ones that stand out, the ones that grab your customer's attention, the ones that are built to last and just work.</p>
                        </li>

                        <li>
                            <h2>product dev</h2>
                            <p>i can help with the planning, design, and development of your app or website. making products that are built to please the user is forte, and my keen eye for details will ensure your website, app, or any other product stands out and grabs the user's attention.</p>
                        </li>

                        <li>
                            <h2>app and web dev</h2>
                            <p>i build beautiful, reliable, and robust mobile apps, websites, or web apps. making apps that are secure and work flawlessly across all your devices is what it's all about :)</p>
                        </li>
                
                        <li>
                            <h2>tech</h2>
                            <p>i work with all the latest tech & tools: react, node, react native, electron, vue.js, firebase, framer, figma, adobe xd, wordpress, etc. everything i make is built to last.</p>
                        </li>
                    </ul>

                    <Link to="/meh" className="about-me">more about me <span role="img" aria-label="peeking eye emoji">👀</span></Link>
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
