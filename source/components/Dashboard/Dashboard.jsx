import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            classes : []
        }
    }

    componentDidMount(){
        /*
        * GET calls here to populate classes
        */
    }

    render() {
        return(
            <div>
                <h1>Welcome to Clearity!</h1>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.array,
}

export default Dashboard
