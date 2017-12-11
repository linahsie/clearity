import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Button, TextArea, Table, Grid, Menu, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import { Link, Redirect } from 'react-router-dom'

import styles from './Sessions.scss'

class Sessions extends Component {

    constructor(props){
        super(props);
        let _dummySessionData = ['Dec 6 2017', 'Dec 4 2017', 'Nov 29 2017', 'Nov 27 2017'];
        let _dummyQuestionData = {
            'Dec 6 2017': [{qn:"ABCDEFG", upvotes: 3}, {qn:"sdlfl", upvotes: 2},{qn:"sdsdsfd", upvotes: 1}],
            'Dec 4 2017': [{qn:"sadfhjlashjdf", upvotes: 5}, {qn:"asuflias", upvotes: 4},{qn:"nmvchdjjsjd", upvotes: 3}],
            'Nov 29 2017': [{qn:"ajdsjfosf", upvotes: 2}, {qn:"m,vbmvgj", upvotes: 3},{qn:"ksfjhsfks", upvotes: 8}],
            'Nov 27 2017': [{qn:"qyeyrianba", upvotes: 1}, {qn:"cmsnls", upvotes: 2},{qn:"mvnsioas", upvotes: 9}]
        };
        this.state = {
            isActive: true,//this.props.isActive,
            classId: this.props.classId,
            classTitle: this.props.classTitle,
            currentSession: _dummySessionData[0],
            sessions: _dummySessionData,
            selectedDate: "",
            questions: _dummyQuestionData._dummySessionData[0]
        }

    }

    componentDidMount(){
        //either make calls to API for list of history sessions here or in Class component
    }

    onCurrentSessionClick = () => {
        this.props.onCurrentClick();
    }

    onSessionClick = (e, { name }) => {
        this.setState({ currentSession: name })
    }

    renderSessions = (item, index) => {
        return(
            <Menu.Item key={index} name={item} active={this.state.currentSession === item} onClick={this.onSessionClick}/>
        )
    }

    render(){
        return(
            <div className='sessions'>
                <h3 className='header'>Records for {this.state.classTitle}</h3>
                { this.state.isActive &&
                  <Button className="currentSession" onClick={this.onCurrentSessionClick}>Current Session</Button>
                }
                <Grid>
                    <Grid.Column width={2}>
                      <Menu fluid vertical tabular>
                        {this.state.sessions.map(this.renderSessions)}
                      </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={14}>
                      <Segment>
                        This is an stretched grid column. This segment will always match the tab height
                      </Segment>
                    </Grid.Column>
                </Grid>
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
