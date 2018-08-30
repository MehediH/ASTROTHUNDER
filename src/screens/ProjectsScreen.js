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
            <div className="app">
                <div className="wrapper">
                    <header>
                        <h1><Link to="/">mehedi hassan</Link></h1>
                        <div>
                            <span></span><span className="alt"></span>
                        </div>
                    </header>
                    
                    <div className="main">
                    {
                        projects.map((project) =>
                            project.fields.visible ? 
                                <article key={project.sys.id}>
                                        <h1 style={{color: project.fields.accent}}>{project.fields.title}</h1>
                                        
                                        <div class="images">
                                            { 
                                                project.fields.images.map((image) => 
                                                    <img key={image.fields.photo.sys.id} alt={image.fields.photo.fields.title} src={image.fields.photo.fields.file.url}/>
                                                )
                                            }
                                        </div>
                                </article>  
                            : <div> </div>
                            
                        )
                    }
                    </div>

                </div>

            </div>
        )
    }
}

