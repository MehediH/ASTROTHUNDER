import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';

export default class ServicesSccreen extends Component {

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
                
                <div className="page-services site-cont">
                    <ul>
                        <li>
                            <h2>interface design</h2>
                            <p>i design interfaces. not your run-of-the-mill interfaces. unique interfaces. the ones that stand out, the ones that grab your customer's attention, the ones that are built to last and just work.</p>
                        </li>

                        <li>
                            <h2>product dev</h2>
                            <p>i can help with the planning, design, and development of your app or website. i have a keen eye for details, and i love making produts that are built to please the user -- right from the planning to the develop</p>
                        </li>

                        <li>
                            <h2>app and web dev</h2>
                            <p>i build beautiful, reliable, and robust mobile apps, websites, or web apps. making apps that are secure and work flawlessly across all your devices is a priority for me.</p>
                        </li>
                
                        <li>
                            <h2>tech</h2>
                            <p>i work with all the latest tech & tools: react, node, electron, framer, figma, wordpress, php, python, you name it. my projects are built to last.</p>
                        </li>
                    </ul>
                </div>

                <Link to="/mehedi">..and some more 👀</Link>

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
