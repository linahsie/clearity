import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import StudentClass from './StudentClass.jsx'
import InstructorClass from './InstructorClass.jsx'
import History from './History.jsx'

import styles from './Class.scss'

class Class extends Component {

    // Constructor for component, calls to this component should pass in a classId param (i.e. /class/:id)
    constructor(props){
        super(props);
        this.state = {
            classId: this.props.location.state.classId,
            classTitle: this.props.location.state.title,
            isInstructor: false,
            isActive: false,
            activeItem: "session"
        }
    }

    handleTabItemClick = (e, { name }) => this.setState({ activeItem: name })

    switchToCurrentSession = () => {
        this.setState({ activeItem: "session" })
    }

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
                <div  className="tabMenu">
                    <Menu attached='top' tabular>
                    <Menu.Item name='session' active={activeItem === 'session'} onClick={this.handleTabItemClick}/>
                    <Menu.Item name='history' active={activeItem === 'history'} onClick={this.handleTabItemClick} />
                    </Menu>

                    <Segment attached='bottom'>
                        {activeItem === 'session' ? (
                            this.state.isInstructor ? <InstructorClass /> : <StudentClass />
                            ) : (
                            <History  isActive={this.state.isActive} classTitle={this.state.classTitle} classId={this.state.classId} onCurrentClick={this.switchToCurrentSession}/>
                        )}
                    </Segment>
                </div>
            </div>
        )
    }
}


Class.propTypes = {
    classId: PropTypes.string,
    isInstructor: PropTypes.bool,
}

export default Class
