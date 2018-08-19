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
        return (
            <div>
                <div className="meta">
                    <h1>
                        <Link to="./">projects</Link>
                    </h1>
                    <p>a creative design studio based in london.</p>
                    <p className="sub">we craft beautiful, robust, and effortless web-based experiences for businesses.</p>
                </div>
                <span className="contact">
                    <Link to="./projects">view our work</Link>

                    { this.state.projects.map(({fields}, i) =>
                        <Link to="./projects/">{fields.title}</Link>
                    )}
                </span>
            </div>
        )
    }
}
