import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ServicesSccreen extends Component {

  constructor(props){
    super(props);

    this.state = {
        gridSizeX: 0,
        gridSizeY: 0,
        messages: []
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

    var messages = [
        "hey, i am mehedi hassan!",
        "i live in london, studying computer science at a top russel group university",
        "for the most part, i write about tech at thurrott.com",
        "i write about the latest news, break scoops, review hardware, and more",
        "on the side, i am a developer and designer building experiences",
        "i build things like tweeten, one of the most popular twitter clients for windows and mac",
        "i build apps that are unique, fast, and reliable. it's as simple as that.",
        "as a designer, creating beautiful and restless experiences is my priority",
        "i work with all the latest tech: react, node, vue, electron, framer, figma, wordpress, php, python, you name it.",
        "right now, i can help you build a beautiful user interface for your next project, or develop the entire thing.",
        "i've got a keen eye for details, and experiences that stand-out while working effectively.",
        "point is, i can help you build a beautiful, robust, and effortless app for your next project or personal brand, regardless of the platform.",
        "let's work together!"
    ]

    var x = 0;

    var loadMessages = setInterval(() => {
        if(x < messages.length){
            var messagesTemp = this.state.messages;
            messagesTemp.push(messages[x])
            
            this.setState({ messages: messagesTemp})
            
            x++;
        } else{
            clearInterval(loadMessages)
        }
    }, 1500);
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
                        

                        {
                            this.state.messages.map((message, i) => 
                                (
                                    <li key={i}><p className="loader"><span></span><span></span><span></span></p><p className={"text item-" + i}>{message} </p></li>
                                )
                            )
                        }
                    </ul>
                </div>

            </div>

            <div className="background-overlay anim" style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                {   

                    [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                }
            </div>
           </React.Fragment>
    )
  }
}
