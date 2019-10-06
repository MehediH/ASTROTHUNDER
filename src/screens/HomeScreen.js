import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";



import * as contentful from 'contentful';

var client = contentful.createClient({
    space: process.env.REACT_APP_BLOG_SPACE,
    accessToken: process.env.REACT_APP_BLOG_ACCESS
})


export default class ProjectScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            projects: [],
            gridSizeX: 0,
            gridSizeY: 0
        }
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

    }

    componentDidMount(){
        client.getEntries({
            content_type: "project"

            
        }).then(entries => {
            console.log(entries);
            this.setState({projects: entries.items});
        }) 
    }


    render() {
        const projects = this.state.projects;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Emily Ko</title>
                    <meta name="description" content="Photographer based in London." />
                </Helmet>
                
                <div className="wrapper">
                    <header>
                        <h1><Link to="/">Emily Ko.</Link></h1>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/chui-lam-emily-k-b3920b159/">LinkedIn</a></li>
                            <li><a href="mailto:emily_ko@live.co.uk">Email</a></li>
                        </ul>
                    </header>
                    
                    <div className="site-cont projects">
                        {
                            projects.map((project) =>
                                project.fields.visibleToPublic ? 
                                    <article key={project.sys.id}>
                                            <Link to={"./projects/" + project.fields.slug} className="project">
                                                <div className="container">
                                                    <img src={project.fields.coverImage.fields.file.url}/>
                                                    <div className="overlay"><h1>{project.fields.title}</h1></div>
                                                    
                                                </div>

                                            </Link>
                
                                            
                                    </article>  
                                : <div> </div>
                                
                            )
                        }
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
