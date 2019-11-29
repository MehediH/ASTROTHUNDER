import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";

export default class ContactScreen extends Component {
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
                    <h1><Link to="/">mehedi hassan.</Link></h1>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="contact site-cont">
                    <div className="meta">
                        <p>Hey! I am currently looking for internships for Summer 2020 and I may just be the perfect fit for your company. I am an individual with great problem-solving and team-working skills, and I would love to work for a company that will enable me to grow myself and my skill set. I love working with advanced algorithms and data structures, building automated systems, designing and building intuitive user-interfaces, engineering scalable systems, and user research.</p>
                        <ul>
                            <li>Achieved 86% in the first year of Computer Science BSc</li>
                            <li>Awareded "Engineering Excellence" scholarship for 3 years</li>
                            <li>Built Tweeten, a popular desktop client with more than 1.3 million downloads</li>
                            <li>Represent all 2nd-year Computer Science students as the Course Rep at the Queen Mary University of London</li>
                            <li>Years of experience working with JavaScript (ES6), Java, Python, PHP, HTML, CSS (SASS/SCSS), Node.js, React, React Native, Vue.js, Electron, GitHub/Git, Firebase, SQL, WordPress, and Adobe XD.</li>
                            <li>Languages: English, Bengali, Hindi (speaking), Urdu (speaking)</li>
                        </ul>
                        
                        <a href="mailto:meh@builtbymeh.com?subject=CV Request&body=Hey Mehedi,%0A%0AI have just checked out your portfolio and I would like to take a look at your CV.%0A%0ACould you please share your CV?%0A%0AThank you.">request my cv -></a>

                        <a href="https://github.com/MehediH/" className="gthb">checkout my work on github -></a>
                    </div>

                </div>


            </div>

    
        
           </React.Fragment>
    )
  }
}
