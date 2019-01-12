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
            content_type: "7leLzv8hW06amGmke86y8G",
            order: "-fields.position"
        }).then(entries => {
            this.setState({projects: entries.items});
        }) 
    }


    render() {
        const projects = this.state.projects;
        return (
            <React.Fragment>
                <Helmet>
                    <title>projects built by meh.</title>
                    <meta name="description" content="A creative designer and developer based in London." />
                </Helmet>
                
                <div className="wrapper">
                    <header>
                        <h1><Link to="/">built by meh.</Link></h1>
                        <div>
                            <span></span><span className="alt"></span>
                        </div>
                    </header>
                    
                    <div className="projects site-cont">
                        {
                            projects.map((project) =>
                                project.fields.visible ? 
                                    <article key={project.sys.id}>
                                            <Link to={"./projects/" + project.fields.slug} className="project">
                                                <div className="container">
                                                    <img 
                                                        alt={project.fields.coverImage.fields.title}
                                                        src={project.fields.coverImage.fields.file.url}
                                                        style={{color: project.fields.acent}}
                                                    />
                                                    <div className="overlay"></div>
                                                    <div className="meta">
                                                        <h1 style={{backgroundColor: project.fields.acent}}>{project.fields.title}</h1>
                                                    </div>
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
