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

        this.listenForR = this.listenForR.bind(this)
        this.listenForW = this.listenForW.bind(this)
        this.listenForE = this.listenForE.bind(this);
        this.listenForRtwo = this.listenForRtwo.bind(this)
    }

    listenForRtwo(e) {
        if (e.key === 'r') {
            console.log('pressed r two')
            this.setState({admin: true}, () => {
                window.removeEventListener('keypress', this.listenForR)
                window.removeEventListener('keypress', this.listenForE)
                window.removeEventListener('keypress', this.listenForW)
                window.removeEventListener('keypress', this.listenForRtwo)
            })
        }
    }

    listenForE(e) {
        if (e.key === 'e') {
            console.log('pressed e')
            window.addEventListener('keypress', this.listenForRtwo, {once: true})
        }
    }

    listenForW(e) {
        if (e.key === 'w') {
            console.log('pressed w')
            window.addEventListener('keypress', this.listenForE, {once: true})
        }
    }

    listenForR() {
        if (!this.state.admin) {
            window.addEventListener('keypress', (e) => {
                if (e.key === 'r') {
                    console.log('pressed r')
                    window.addEventListener('keypress', this.listenForW, {once: true})
                }
            })
        }
        
    }



    render() {
        this.listenForR()
        return <FrontPage admin={this.state.admin}/>
    }
}


const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Home />, wrapper) : console.log('Unable to locate root')


