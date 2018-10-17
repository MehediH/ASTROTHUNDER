import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ServicesSccreen extends Component {



  render() {
    return (
        <React.Fragment>
            <div className="wrapper no-bg">
                <header>
                    <h1><Link to="/">built by meh.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="page-services site-cont">
                    <h1><span>👋🏼</span><h1 class="gr">, i am mehedi hassan! i live in london, studying computer science at a top russel group university. for the most part, i write about tech at thurrott.com. on the side, i am a developer and designer building experiences. i build things like tweeten, one of the most popular twitter clients for windows and mac. i craft apps and experiences that are unique, fast, and reliable. here's what I can help you with:</h1></h1>
                    <ul>
                        <li>as a designer, creating beautiful and restless experiences is my priority 💯</li>
                        <li>i work with all the latest tech & tools: react, node, vue, electron, framer, wordpress, php, python, you name it 🛠</li>
                        <li>i can help you build a beautiful user interface for your next project, or develop the entire thing 🤟🏼</li>
                        <li>i've got a keen eye for details, and experiences that stand-out while working effectively. plus, i'm really good at team work 👀</li>
                        <li>i can help you build a beautiful, robust, and crating effortless app for your next project or personal brand, regardless of the platform 🤙🏼</li>
                        <li>let's work together! 🙌🏼</li>
                    </ul>
                </div>

            </div>

       
        </React.Fragment>
    )
  }
}
