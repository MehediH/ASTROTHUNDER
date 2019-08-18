import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";

export default class ServicesSccreen extends Component {

  constructor(props){
    super(props);

    this.state = {
        gridSizeX: 0,
        gridSizeY: 0,
        messages: [],
        scroll: true
    }

    this.aboutRef = React.createRef();

  }

  componentWillMount(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var elemProps = generateBG(width, height, false);

    this.setState({
        ...elemProps
    })

    window.addEventListener('resize', () => {
        if(width !== window.innerWidth){
            var elemProps = generateBG(window.innerWidth, window.innerHeight, true);
    
            this.setState({
                ...elemProps
            })
        }
    })

    var messages = [
        "👋🏼, i am mehedi hassan!",
        "i live in london, studying computer science and currently looking for internships 🤓",
        "i am also a developer and designer building experiences 🔥",
        "i build apps like tweeten, one of the most popular twitter clients for windows and mac 🐣",
        "most of my time is spent building apps and experiences that are unique, fast, and reliable ⚡",
        "as a designer, creating beautiful and restless experiences is my priority 🙌",
        "i work with all the latest tech & tools: react, node, vue.js, react native, electron, adobe xd, framer, figma, wordpress, php, you name it 🛠",
        "currently, i am looking for some work and i'd love to help you build a beautiful user interface for your next project, or develop the entire thing 🤟🏼",
        "i've got a keen eye for details, and experiences that stand-out while working effectively. plus, i'm really good at team work 👀",
        "i can help you build a beautiful, robust, and effortless experience for your next project or personal brand, regardless of the platform 🤙🏼",
        "let's work together! 🙌🏼"
    ]

    var x = 1;

    var messagesTemp = this.state.messages;
    messagesTemp.push(messages[0])
            
    this.setState({ messages: messagesTemp})

    this.interval = setInterval(() => {
        if(x < messages.length){
            var messagesTemp = this.state.messages;
            messagesTemp.push(messages[x])
            
            this.setState({ messages: messagesTemp})
            
            x++;

        } else{
            clearInterval(this.interval)
        }
    }, 3000);

    window.addEventListener('mousewheel', () => {
        this.setState({scroll: false});
    });

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <React.Fragment>
            <Helmet>
                <title>about me // built by meh.</title>
                <meta name="description" content="A creative designer and developer based in London." />
            </Helmet>
            <div className="wrapper" ref={this.aboutRef}>
                <header>
                    <h1><Link to="/">built by meh.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="page-about site-cont">
                    <ul>
                        

                        {
                            this.state.messages.map((message, i) => 
                                (
                                    <li 
                                        key={i}
                                        ref = {(el) => {
                                                if (el) {
                                                    el.addEventListener("animationend", event  => {
                                                        if(event.animationName === "nightslikethis" && this.state.scroll){
                                                            var size = this.aboutRef.current.clientHeight;
                                                            window.scrollTo(0, size);
                                                        }
                                                    });
                                                }
                                            }}
                                    >
                                        <p className="loader"><span></span><span></span><span></span></p>
                                        
                                        { i !== 10
                                            ? <p className={"text item-" + i}>{message}</p>
                                            : <p className={"text item-" + i}><Link to="./contact">{message}</Link></p>
                                        }
                                    </li>
                                )
                            )
                        }
                    </ul>
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
