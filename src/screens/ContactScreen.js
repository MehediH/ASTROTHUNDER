import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";
import pdf from '../assets/mehedi-hassan-cv.pdf';

export default class ContactScreen extends Component {
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
  }

  render() {
    return (
        <React.Fragment>
            <div className="wrapper no-bg">
                <Helmet>
                    <title>contact // mehedi hassan.</title>
                    <meta name="description" content="A creative designer and developer based in London." />
                </Helmet>

                <header>
                    <Link to={{pathname: "/", state: { ...this.props.location.state, comeThru: true }}}><h1>mehedi hassan.</h1><span></span></Link>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="contact site-cont">
                    <div className="meta">
                        <div className="intro"><p>Hey! I am CompSci undergraduate student who loves learning new tech, and building pretty things — mostly software. I am an individual with great problem-solving and team-working skills. At school, I am mostly learning advanced algorithms and data structures. And in my free time, I design and build intuitive user-interfaces and make products that not only help my own workflow, but thousands of other developers. Here are a couple of accomplishments.</p></div>
                        <ul>
                            {/* <li>Achieved 86% in the first year of Computer Science BSc</li> */}
                            <li>Awarded "Engineering Excellence" scholarship for 3 years</li>
                            <li>Built Tweeten, a popular desktop client with more than 1.3 million downloads</li>
                            <li>Represent all 2nd-year Computer Science students as the Course Rep at the Queen Mary University of London</li>
                            <li>Years of experience working with JavaScript (ES6), Java, Python, PHP, HTML, CSS (SASS/SCSS), Node.js, React, React Native, Vue.js, Electron, GitHub/Git, Firebase, SQL, WordPress, and Adobe XD.</li>
                            {/* <li>Languages: English, Bengali, Hindi (speaking), Urdu (speaking)</li> */}
                        </ul>
                        

                        <div class="socials">
                            <a href={pdf}>Download CV</a>
                            <a href="mailto:meh@builtbymeh.com">Email</a>
                            <a target="_blank" href="https://github.com/MehediH">GitHub</a>
                            <a target="_blank" href="https://www.linkedin.com/in/meh-hassan/">LinkedIn</a>
                            <a target="_blank" href="https://www.instagram.com/builtbymeh/">Instagram</a>
                        </div>

                    </div>

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
