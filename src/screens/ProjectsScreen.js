import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as contentful from 'contentful';

var client = contentful.createClient({
  space: "f1nnr97nijby",
  accessToken: "5a1f8b547286fd1ca20085700faf704f17836f0cbe89209e8b61a3326af658ed"
})


export default class ProjectScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            projects: []
        }
    } 

    componentDidMount(){
        client.getEntries({content_type: "7leLzv8hW06amGmke86y8G"}).then(entries => {
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
        
                                        <h1 style={{color: project.fields.accent}}>{project.fields.title}</h1>
                                        <p>{project.fields.description}</p>
                                        <img src={project.fields.coverImage.fields.file.url}/>
                                </article>  
                            : <div> </div>
                            
                        )
                    }
                </div>
            </div>
        )
    }
}
