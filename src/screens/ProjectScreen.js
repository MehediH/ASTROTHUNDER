import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";
import Markdown from 'markdown-to-jsx';

import * as contentful from 'contentful';

var client = contentful.createClient({
    space: process.env.REACT_APP_BLOG_SPACE,
    accessToken: process.env.REACT_APP_BLOG_ACCESS
})


export default class ProjectScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            project: [],
            notFound: false,
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

    componentDidMount(){
        client.getEntries({content_type: "7leLzv8hW06amGmke86y8G", "fields.slug[match]": this.props.match.params.project}).then((entry) => {
            entry.total === 1 ? this.setState({project: entry.items[0]}) : this.setState({notFound: true})
        }).catch((error) => {
            console.error(error)
        })

    }


    render() {
        const project = this.state.project;

        const hideImg = ({ children, ...props }) => (null);
        
        // filter out paragraph blocks
        const showImg = ({ children}) => {
            let c = []

            children.map((child) => {
                if (child.type === "img"){
                    c.push(child)
                } 

            })

            return c
        };
            


        return (
            <React.Fragment>
                
                <div className={`wrapper ${this.props.location.state && this.props.location.state.comeThru ? "no-bg" : ""}`}>
                    <header>
                        <Link to={{pathname: "/", state: { ...this.props.location.state, comeThru: true }}}><h1>mehedi hassan.</h1><span></span></Link>
                        <div>
                            <span></span><span className="alt"></span>
                        </div>
                    </header>
                    
                    { project.fields && !this.state.notFound && 
                        <article className="single-project site-cont">
                            <Helmet>
                                <title>{project.fields.title} // built by meh.</title>
                                <meta name="description" content={project.fields.slogan} />
                            </Helmet>
                            <Link className="allProjects" to={{pathname: "/projects", state: { ...this.props.location.state, comeThru: true }}}>{"<- view all projects"}</Link>
                            <div className="meta">
                                <h1>{project.fields.title}</h1>
                                <p>{project.fields.slogan}</p>
                                
                                { project.fields.projectLink !== undefined && 
                                    <div><a href={project.fields.projectLink} target="_blank" className="view">view project</a></div>
                                }

                                <Markdown options={{overrides: {img: {component: hideImg}}}}>{project.fields.content}</Markdown>

                                
                            </div>
                            
                            <div className="article-content">
                                
                                <Markdown options={{overrides: {p: {component: showImg}}}}>{project.fields.content}</Markdown>
                                
                            </div>
                        </article> 
                    }

                    {
                        this.state.notFound && 

                        <article className="single-project site-cont">
                            
                            <div className="meta">
                                <h1>This project doesn't exist.</h1>
                                <p>The project you are looking for couldn't be found. You can <Link to="/projects">view all of our projects here</Link>, or <Link to="/">go back to the homepage here instead.</Link></p>
                            </div>

                        </article>
                    }
                
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
