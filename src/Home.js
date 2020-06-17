import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/FrontPage'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <FrontPage/>
    }
}


const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Home />, wrapper) : console.log('Unable to locate root')