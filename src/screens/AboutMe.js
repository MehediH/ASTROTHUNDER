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
        messages: [
            "Hey! I'm Mehedi Hassan!",
            "I live in London, studying Computer Science at QMUL and currently looking for internships 🤓",
            "I love solving problems that tackle real-life challenges and design solutions that work effortlessly ⚡",
            "So far, my biggest project is Tweeten, one of the most popular Twitter clients for Windows and Mac with more than 1.3M downloads 🐣",
            "As a designer, creating beautiful, accessible, and intuitive interfaces is my priority 🙌",
            "I have experience working with the leading tech and programming languages. ",
            "Oh and, I love working on open-source software.",
            "I am incredibly passionate about using complex algorithms and data structures to help build efficient, fast, and effortless software 👨‍👩‍👦‍👦",
            "Currently, I am looking for a tech-related product or software engineering internship for 2020 🤟🏼",
            "I am always looking forward to learning new things.",
            "Plus, I've got a keen eye for details, and a lot of experience that could be a perfect fit for your company 🤙🏼",
            "let's work together! 👀"
        ],
        scroll: true,
        animateState: this.props.location.state && this.props.location.state.animationEnd ? "stopaim" : "animated",
        animationEnd: this.props.location.state.animationEnd !== undefined ? this.props.location.state.animationEnd : false 
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
    

    window.addEventListener('mousewheel', () => {
        this.setState({scroll: false});
    });

  }


  stopAnim(){
    this.setState({animateState: "stopaim", animationEnd: true})
  }

  loadMessage(msg, i){
    if(i == 0){
        return <p className={"text item-" + i}>{msg}<span className="animControl" onClick={this.stopAnim.bind(this)}>Skip</span></p>
    } else if(i == 11){
        return <p className={"text item-" + i}><Link to="./contact">{msg}</Link></p>
    } else{
        return <p className={"text item-" + i}>{msg}</p>
    }
  }

  render() {
    return (
        <React.Fragment>
            <Helmet>
                <title>about me // mehedi hassan.</title>
                <meta name="description" content="A creative designer and developer based in London." />
            </Helmet>
            <div className={`wrapper ${this.props.location.state && this.props.location.state.comeThru ? "no-bg" : ""}`} ref={this.aboutRef}>
                <header>
                    <Link to={{pathname: "/", state: {comeThru: true, animationEnd: this.state.animationEnd }}}><h1>mehedi hassan.</h1><span></span></Link>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>

                <div className="page-about site-cont">
                    <ul className={this.state.animateState}>
                        {
                            this.state.messages.map((message, i) => 
                                (
                                    <li 
                                        key={i}
                                        ref = {(el) => {
                                                if (el) {
                                                    el.addEventListener("animationend", event  => {
                                                       
                                                        if(event.animationName === "iwishicould"){
                                                            if(event.srcElement.className.indexOf("item-9") > -1){
                                                                this.setState({animationEnd: true})
                                                                document.getElementsByClassName("animControl")[0].className += " hide"
                                                            }
                                                        }

                                                        if(event.animationName === "nightslikethis" && this.state.scroll){
                                                            var size = this.aboutRef.current.clientHeight;
                                                            window.scrollTo(0, size);
                                                        }
                                                    });
                                                }
                                            }}
                                    >
                                        <p className="loader"><span></span><span></span><span></span></p>
                                        
                                     
                                        {this.loadMessage(message, i)}
                                    
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>

                <div className={"background-overlay anim " + this.state.resize } style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                    {   

                        [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                    }
                </div>
            </div>

        </React.Fragment>
    )
  }
}
