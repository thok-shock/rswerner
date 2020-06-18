import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/FrontPage'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false
        }
    }

    watch() {
        window.addEventListener('keypress', (e) => {
            if (e.key === 'r') {
                window.addEventListener('keypress', e => {
                    if (e.key === 'w') {
                        window.addEventListener('keypress', e => {
                            if (e.key === 'e') {
                                window.addEventListener('keypress', e => {
                                    if (e.key === 'r') {
                                        this.setState({admin: true})
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    render() {
        this.watch();
        return <FrontPage admin={this.state.admin}/>
    }
}


const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Home />, wrapper) : console.log('Unable to locate root')


