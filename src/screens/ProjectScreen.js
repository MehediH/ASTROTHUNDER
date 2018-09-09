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
            notFound: false,
            gridSizeX: 0,
            gridSizeY: 0
        }
        
    } 


    componentWillMount(){
        this.setState({
            gridSizeX: Math.round(window.innerWidth / 256),
            gridSizeY: Math.round(window.innerHeight / 288)
        })
        
        window.addEventListener('resize', () => {        
            this.setState({
                gridSizeX: Math.round(window.innerWidth / 256),
                gridSizeY: Math.round(window.innerHeight / 288)
            })
    
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
        return (
            <React.Fragment>
                <div className="wrapper">
                    <header>
                        <h1><Link to="/">built by meh.</Link></h1>
                        <div>
                            <span></span><span className="alt"></span>
                        </div>
                    </header>
                    
                    { project.fields && !this.state.notFound && 
                        <article className="single-project site-cont">
                            
                            <div className="meta">
                                <h1>{project.fields.title}</h1>
                                <p>{project.fields.slogan}</p>
                            </div>

                            <div className="article-content">
                                {project.fields.content}
                            </div>

                            <div className="images">
                                { project.fields.images &&
                                    project.fields.images.map((image) => 
                                        <img key={image.fields.photo.sys.id} alt={image.fields.photo.fields.title} src={image.fields.photo.fields.file.url}/>
                                    )
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
                
                <div className="background-overlay anim" style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                    {   

                        [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                    }
                </div>
            </React.Fragment>   
        )
    }
}
