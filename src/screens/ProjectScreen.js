import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as contentful from 'contentful';

var client = contentful.createClient({
  space: "1tg8czgj9nfc",
  accessToken: "e2a48051290e82b794a4eb9e50829d63cfb5ded5befd4f0c637994497206a333"
})


export default class ProjectScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            project: [],
            notFound: false
        }
        
    } 

    componentWillMount(){
        client.getEntry(this.props.match.params.project).then((entry) => {
            this.setState({project: entry})
        }).catch((error) => {
            this.setState({notFound: true})
        })
    }

 

    render() {
        const project = this.state.project;

        return (
            <div className="wrapper">
                <div className="comp-header">
                    <div className="meta">
                        <h1>
                            <Link to="/">inspect element</Link> { project.fields && <span>{project.fields.title}</span>}
                        </h1>  
                    </div>
                </div>

                { project.fields && 
                    <article key={project.sys.id} className="project-wrapper">
                        <Link to={"projects/"  + project.sys.id }>
                            <img src={project.fields.featuredImage.fields.file.url}/>

                            <div className="meta" style={{backgroundColor: project.fields.accent, boxShadow: `0 2px 20px ${project.fields.accent}`}}>
                                <h1>{project.fields.title}</h1>
                                <p>{project.fields.blogExcerpt}</p>
                            </div>
                        </Link>
                    </article>  
                } 

                { this.state.notFound &&
                    <div class="project-wrapper">Sorry, this project does not exist.</div>
                }
            </div>
        )
    }
}
