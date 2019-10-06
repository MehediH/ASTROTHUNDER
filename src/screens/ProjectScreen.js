import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
            project: [],
            notFound: false
        }

    } 

   

    componentDidMount(){
        client.getEntries({content_type: "project", "fields.slug[match]": this.props.match.params.project}).then((entry) => {
            entry.total === 1 ? this.setState({project: entry.items[0]}) : this.setState({notFound: true})
        }).catch((error) => {
            console.error(error)
        })

        
    }


    render() {
        const project = this.state.project;
        return (
            <React.Fragment>
                
                <div className="wrapper">
                    <header>
                        <h1><Link to="/">Emily Ko.</Link></h1>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/chui-lam-emily-k-b3920b159/">LinkedIn</a></li>
                            <li><a href="mailto:emily_ko@live.co.uk">Email</a></li>
                        </ul>
                    </header>
                    
                    { project.fields && !this.state.notFound && 
                        <article className="single-project site-cont">
                            <Helmet>
                                <title>{project.fields.title} - Emily Ko.</title>
                                <meta name="description" content={project.fields.slogan} />
                            </Helmet>

                            <div className="meta">
                                <h1>{project.fields.title}</h1>
                                <p>{project.fields.description}</p>
                            </div>

                            <div className="photos">

                                {
                                    project.fields.photos.map((photo, i) => {
                                        return <img key={i} src={photo.fields.file.url} alt={photo.fields.title} />
                                    })
                                }

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
                
                </div>
                
            
            </React.Fragment>   
        )
    }
}
