import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import StudentClass from './StudentClass.jsx'
import InstructorClass from './InstructorClass.jsx'

import styles from './Class.scss'

class Class extends Component {

    // Constructor for component, calls to this component should pass in a classId param (i.e. /class/:id)
    constructor(){
        super();
        this.state = {
            classId: "",
            isInstructor: false,
            activeItem: "session"
        }
    }

    handleTabItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        let activeItem = this.state.activeItem;
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
                <Menu attached='top' tabular className="tabMenu">
                <Menu.Item name='session' active={activeItem === 'session'} onClick={this.handleTabItemClick}/>
                <Menu.Item name='history' active={activeItem === 'history'} onClick={this.handleTabItemClick} />
                </Menu>

                <Segment attached='bottom'>
                    {activeItem === 'session' ? (
                        this.state.isInstructor ? <InstructorClass /> : <StudentClass />
                        ) : (
                        <p>History</p>
                    )}
                </Segment>

            </div>
        )
    }
}


Class.propTypes = {
    classId: PropTypes.string,
    isInstructor: PropTypes.bool,
}

export default Class
