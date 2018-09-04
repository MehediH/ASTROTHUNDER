import React, { Component } from 'react'

export default class anitdote extends Component{
    constructor(){
        super()

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

    render () {
        return (
            <div className="background-overlay anim" style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
        )
    }

}