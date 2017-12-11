import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Button, Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './ClassHistory.scss'

class ClassHistory extends Component {

    constructor(props){
        super(props);
        this.state = {
            questions : [],
            classId: this.props.location.data.classId,
            classTitle: this.props.location.data.classTitle,
            classDate: this.props.location.data.date,
        }
    }

    componentDidMount(){

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <Menu fluid widths={3} borderless stackable>
                    <Container>
                        <Menu.Item>
                          <Link to="/" className="left">
                              <Header as='h3'>Home</Header>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/" className="" id="logo">Clearity</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/login" className="right">
                              <div className="ui primary button" id="theme-blue">Log out</div>
                          </Link>
                        </Menu.Item>
                    </Container>
                </Menu>
                <div>
                    <h3>Questions from {this.state.classTitle} on {this.state.classDate}</h3>
                </div>
            </div>
        )
    }
}

export default ClassHistory
