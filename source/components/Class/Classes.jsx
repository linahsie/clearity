import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import Class from './Class.jsx';
import styles from './Class.scss'

class Classes extends Component {

    render() {
        return(
            <Switch>
                <Route path={`${this.props.match.url}/:classId`} component={Class}/>
            </Switch>
        )
    }
}

export default Classes
