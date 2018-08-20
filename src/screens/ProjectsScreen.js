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
            projects: []
        }
    } 

    componentWillMount(){
        client.getEntries().then(entries => {
            this.setState({projects: entries.items});
        }) 
    }

    render() {
        const projects = this.state.projects;
        console.log(projects)
        return (
            <div className="wrapper">
                <div className="comp-header">
                    <div className="meta">
                        <h1>
                            <Link to="./">inspect element</Link>
                        </h1>  
                    </div>
                </div>

                <div className="projects">
                    {
                        projects.map((project) =>
                            project.fields.visible ? 
                                <article key={project.sys.id}>
                                    <img src={project.fields.featuredImage.fields.file.url}/>

                                    <div className="meta" style={{backgroundColor: project.fields.accent, boxShadow: `0 2px 20px ${project.fields.accent}`}}>
                                        <h1>{project.fields.title}</h1>
                                        <p>{project.fields.blogExcerpt}</p>
                                    </div>

                                </article>
                            : <div> </div>
                            
                        )
                    }
                </div>
            </div>
        )
    }
}
