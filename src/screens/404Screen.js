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
            <h1 className="four">it's a 404<Link to="/">let's go back home <span className="arrow">-></span></Link></h1>

            <div className="background-overlay 404" style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
        </div>
    )
  }
}
