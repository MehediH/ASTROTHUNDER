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
        "Hey! I'm Mehedi Hassan!",
        "I live in London, studying Computer Science at QMUL and currently looking for internships 🤓",
        "I love solving problems that tackle real-life challenges and design solutions that work effortlessly ⚡",
        "So far, my biggest project is Tweeten, one of the most popular Twitter clients for Windows and Mac with more than 1.3m downloads 🐣",
        "I have extensive knowledge about software, with years of experience in writing code with Python, JavaScript, Java, and PHP ⚡",
        "As a designer, creating beautiful, accessible, and intuitive interfaces is my priority 🙌",
        "I have expereince with a lot of the latest tech & tools: Git, JavaScript, React, Node.js, React Native, Electron, SQL, Firebase, Docker, Google Cloud, AWS, Adobe XD, Framer, you name it 🛠",
        "Oh and, I love working on open-source software and incredibly passionate about using complex algorithms and data structures to help build efficient, fast, and effortless software 👨‍👩‍👦‍👦",
        "Currently, I am looking for a tech-related product or software engineering internship for 2020 🤟🏼",
        "As an individual who loves solving problems and tackling real-world challenges, I am always looking forward to learning new things. Plus, I've got a keen eye for details, and a lot of experience that could be a perfect fit for your company 🤙🏼",
        "let's work together! 👀"
    ]


    for(let i=0; i < messages.length; i++){
        var messagesTemp = this.state.messages;

        messagesTemp.push(messages[i])
        
       
    }

    

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
                <title>about me // meehdi hassan.</title>
                <meta name="description" content="A creative designer and developer based in London." />
            </Helmet>
            <div className="wrapper" ref={this.aboutRef}>
                <header>
                    <h1><Link to="/">mehedi hassan.</Link></h1>
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
