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
            project: [],
            notFound: false
        }
        
    } 

    componentWillMount(){
        client.getEntries({content_type: "7leLzv8hW06amGmke86y8G", "fields.slug[match]": this.props.match.params.project}).then((entry) => {
            entry.total == 1 ? this.setState({project: entry.items[0]}) : this.setState({notFound: true})
        }).catch((error) => {
            console.error(error)
        })

    }

 

    render() {
        const project = this.state.project;
        console.log(project)

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
                            <img src={project.fields.coverImage.fields.file.url}/>

                            <div className="meta" style={{backgroundColor: project.fields.accent, boxShadow: `0 2px 20px ${project.fields.accent}`}}>
                                <h1>{project.fields.title}</h1>
                                <p>{project.fields.blogExcerpt}</p>
                            </div>

                            <div class="images">
                                                { project.fields.image &&
                                                    project.fields.images.map((image) => 
                                                        <img key={image.fields.photo.sys.id} alt={image.fields.photo.fields.title} src={image.fields.photo.fields.file.url}/>
                                                    )
                                                }
                                            </div>
                        </Link>
                    </article>  
                } 

                { this.state.notFound &&
                    <div className="project-wrapper">Sorry, this project does not exist.</div>
                }
            </div>
        )
    }
}
