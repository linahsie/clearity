import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Button, TextArea, Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link, Redirect } from 'react-router-dom'

import styles from './Sessions.scss'

class Sessions extends Component {

    constructor(props){
        super(props);
        let _dummyData = ['Dec 6 2017', 'Dec 4 2017', 'Nov 29 2017', 'Nov 27 2017']
        this.state = {
            isActive: true,//this.props.isActive,
            classId: this.props.classId,
            classTitle: this.props.classTitle,
            sessions: _dummyData,
            redirect: false,
            selectedDate: ""
        }

    }

    componentDidMount(){
        //either make calls to API for list of history sessions here or in Class component
    }

    generateButton = (item, index) => {
        return(
            <li key={index}><Button className="sessionButton" value={item} classtitle={this.state.classTitle} onClick={this.onSessionClick}>{item}</Button></li>
        )
    }

    onCurrentSessionClick = () => {
        this.props.onCurrentClick();
    }

    onSessionClick = (event, data) => {
        this.setState({
            redirect: true,
            selectedDate: data.value
        })
    }

    renderSessions = () => {
        return(
            <div>
                <h3 className='header'>Records for {this.state.classTitle}</h3>
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

    render(){
        return(
            <div className='sessions'>
                { this.state.redirect ? <Redirect to="/history" data={{classId: this.state.classId, date: this.state. selectedDate, title: this.state.classTitle}}/> :
                    this.renderSessions()
                }
            </div>
        )
    }
}

History.propTypes = {
    classId: PropTypes.string,
    isActive: PropTypes.bool,
    sessions: PropTypes.array
}

export default Sessions
