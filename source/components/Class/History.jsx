import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Button, TextArea, Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import styles from './History.scss'

class History extends Component {

    constructor(props){
        super(props);
        let _dummyData = ['Dec 6 2017', 'Dec 4 2017', 'Nov 29 2017', 'Nov 27 2017']
        this.state = {
            isActive: true,//this.props.isActive,
            classId: this.props.classId,
            sessions: _dummyData
        }

    }

    componentDidMount(){
        //either make calls to API for list of history sessions here or in Class component
        console.log("did mount");
    }

    generateButton = (item, index) => {
        return(
            <li><Button className="sessionButton" key={index}>{item}</Button></li>
        )
    }

    onCurrentSessionClick = () => {
        this.props.onCurrentClick();
    }

    render(){
        return(
            <div className='sessions'>
                <h3 className='header'>Records for _CLASSNAME_</h3>
                { this.state.isActive &&
                  <Button className="currentSession" onClick={this.onCurrentSessionClick}>Current Session</Button>
                }
                <br></br>
                <ul>
                {this.state.sessions.map(this.generateButton)}
                </ul>
            </div>
        )
    }
}

History.propTypes = {
    classId: PropTypes.string,
    isActive: PropTypes.bool,
    sessions: PropTypes.array
}

export default History
