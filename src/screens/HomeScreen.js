import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
        gridSizeX: 0,
        gridSizeY: 0
    }

  }

  componentWillMount(){
    this.setState({
        gridSizeX: Math.round(window.innerWidth / 256),
        gridSizeY: Math.round(window.innerHeight / 288)
    })
    
    window.addEventListener('resize', () => {        
        this.setState({
            gridSizeX: Math.round(window.innerWidth / 256),
            gridSizeY: Math.round(window.innerHeight / 288)
        })

    })
  }

  render() {
    return (
        <div className="app">
            <div className="wrapper">
                <header>
                    <h1><Link to="/">built by meh</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="main">
                    <div className="hero">
                        <h1 class="hi">hi! i'm mehedi.</h1>
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

            <div className="background-overlay anim" style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
        </div>
    )
  }
}
