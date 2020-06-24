import React from 'react'
import Project from './Project'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myVotes: []
        }

        this.createVote = this.createVote.bind(this)
    }

    componentDidMount() {
        fetch('/upvote', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status != 200) {
                throw('Server Error')
            } else {
                return res.json();
            }
        })
        .then(res => {
            this.setState({myVotes: res})
        })
        .catch(err => {
            console.log(err);
            alert('Something went wrong')
        })
    }

    createVote(projectID) {
        fetch('/upvote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({projectID: projectID})
        })
        .then(res => {
            if (res.status != 200 && res.status != 201) {
                throw('Server Error')
            } else {
                return res.json()
            }
        })
        .then(res => {
            let newArray = JSON.parse(JSON.stringify(this.state.myVotes))
            newArray.push(res)
            this.props.incrementVote(projectID)
            this.setState({myVotes: newArray})
        })
        .catch(err => {
            console.log(err);
            alert('Something went wrong');
        })
    }

    listProjects() {
        if (this.props && this.props.projects && this.props.projects.length > 0) {
            return this.props.projects.map((project) => {
                var didVote = false;
                if (this.state.myVotes) {
                    var newArray = this.state.myVotes.map(vote => {
                        if (vote.projectID === project.projectID){
                            return true;
                        } else {
                            return false;
                        } 
                    })
                    didVote = newArray.includes(true)
                }
                return <Project key={project.projectID} project={project} admin={this.props.admin} deleteProject={this.props.deleteProject} modifyProject={this.props.modifyProject} myVotes={this.state.myVotes} createVote={this.createVote} voted={didVote} ></Project>
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