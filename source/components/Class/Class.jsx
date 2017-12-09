import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Button, Card, Image, Icon, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Class.scss'

class Class extends Component {

    // Constructor for component, calls to this component should pass in a classId param (i.e. /class/:id)
    constructor(){
        super();
        this.state = {
            classId: ""
        }
    }

    askQuestion = (event) => {
        event.preventDefault();
    }

    render() {
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
                <Container className="questionSection">
                    <h3>Ask A Question</h3>
                    <TextArea className="question" placeholder='Your Question Here...' autoHeight rows={3} />
                    <br></br>
                    <Button className="submit">
                        Submit
                    </Button>
                </Container>
            </div>
        )
    }
}

export default Class
