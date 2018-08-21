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

    componentDidMount(){
        client.getEntries().then(entries => {
            this.setState({projects: entries.items});
        }) 
    }

    render() {
        const projects = this.state.projects;

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
                                    <Link to={"projects/"  + project.sys.id }>
                                        <img src={project.fields.featuredImage.fields.file.url}/>
                                    </Link>
                                </article>  
                            : <div> </div>
                            
                        )
                    }
                </div>
            </div>
        )
    }
}
