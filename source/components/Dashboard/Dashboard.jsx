import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Button, Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Dashboard.css'

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
        const { activeItem } = this.state
        
        return(
            <div>
                <Menu fluid widths={3} borderless stackable>
                    <Container>
                        <Menu.Item>
                          <Link to="/login" className="left">
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
                
                <Container>
                    <Card.Group>
                        <Card>
                            <Card.Content>
                              <Card.Description textAlign="right">
                                  <Icon name='circle' color='green'/>Live
                              </Card.Description>
                              <Card.Header>CS 498RK</Card.Header>
                              <Card.Meta>The Art of Web Programming</Card.Meta>
                              <Card.Description>Molly wants to add you to the group</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button basic color='green' fluid>Join</Button>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                              <Card.Description textAlign="right">
                                <Icon name='circle'/>Offline
                              </Card.Description>
                              <Card.Header>CS 465</Card.Header>
                              <Card.Meta>User Interface Design</Card.Meta>
                              <Card.Description>Molly wants to add you to the group</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='grey' disabled>Join</Button>
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Icon name='plus'/>
                                <Card.Header>Create a class</Card.Header>
                            </Card.Content>
                        </Card>
                  </Card.Group>
                </Container>
            </div>
        )
    }
}

/*
Dashboard.propTypes = {
    classes: PropTypes.array,
}
*/

export default Dashboard
