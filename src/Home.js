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

    listenForR = (e) => {
        if (e.key === 'r' && !this.state.admin) {
            this.setState({admin: true}, () => {
                window.removeEventListener('keypress', this.listenForE, false)
                window.removeEventListener('keypress', this.listenForEtwo, false)
                window.removeEventListener('keypress', this.listenForW, false)
                window.removeEventListener('keypress', this.listenForR, false)
            })
        }
    }
    listenForEtwo = (e) => {
        if (e.key ==='e' && !this.state.admin) {
            window.addEventListener('keypress', this.listenForR, {once: true})
        }
    }

    listenForW = (e) => {
        if (e.key === 'w' && !this.state.admin) {
            window.addEventListener('keypress', this.listenForEtwo, {once: true})
        }
    }

    listenForE = (e) => {
        if (e.key === 'w' && !this.state.admin) {
            window.addEventListener('keypress', this.listenForW, {once: true})
        }
    }



    render() {
        this.listenForE();
        return <FrontPage admin={this.state.admin}/>
    }
}


const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Home />, wrapper) : console.log('Unable to locate root')


