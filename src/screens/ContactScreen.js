import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';

export default class ContactScreen extends Component {
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
            <div className="wrapper no-bg">
                <header>
                    <h1><Link to="/">built by meh.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="contact site-cont">
                    <div class="meta">
                        <p>hey! i am always looking for work, so if you have a project that you would like me to work on, feel free to hit me up. i can help with the development of websites, web apps, mobile apps, desktop web-based apps, and more. i can even help with the design of your next app or project, as well as all the creative planning required to bring your idea to life. i have experience with all the latest tech & tools: react, node, vue, electron, framer, figma, wordpress, php, python, you name it.</p>
                    
                        <a href="mailto:meh@builtbymeh.com">let's work together -></a>
                        <a href="https://twitter.com/mehedih_" class="twttr">reach out on twitter -></a>
                        <a href="https://github.com/MehediH/" class="gthb">checkout my work on github -></a>
                    </div>

                </div>


            </div>

    
        
           </React.Fragment>
    )
  }
}
