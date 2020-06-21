import React from 'react'
import Project from './Project'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    listProjects() {
        if (this.props && this.props.projects && this.props.projects.length > 0) {
            return this.props.projects.map((project) => {
                return <Project key={project.projectID} project={project} admin={this.props.admin} deleteProject={this.props.deleteProject} modifyProject={this.props.modifyProject}></Project>
            })
        } else {
            return <p>Loading ...</p>
        }
    }


    render() {
        return <div className='d-flex flex-row justify-content-center m-5 flex-wrap'>
            {this.listProjects()}
        </div>
    }
}