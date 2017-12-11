import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header, Menu, Container, Button, Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Dashboard.css'

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            classes: [],
            isInstructor: false
        }
    }

    componentDidMount(){
        /*
        * GET calls here to populate classes
        */
        axios.get(`http://localhost:3000/api/home`)
            .then(res => {
            classes = res.map(obj => obj.data);
            this.setState({ classes });
        });
    }

    render() {
        //const { activeItem } = this.state
        console.log(this.state.classes);
        const isInstructor = this.state.isInstructor;

        let additionalCard = null;
        if (isInstructor) {
          additionalCard = <Link to="/createClass">
                                <Card.Content textAlign="center" className="add-create">
                                    <Icon name='plus' color="grey"/>
                                    <Header as='h3' color="grey">Create a class</Header>
                                </Card.Content>
                            </Link>;
        } else {
          additionalCard = <Link to="/addClass">
                                <Card.Content textAlign="center" className="add-create">
                                    <Icon name='plus' color="grey"/>
                                    <Header as='h3' color="grey">Add a class</Header>
                                </Card.Content>
                            </Link>;
        }

        return(
            <div>
                <Menu fluid widths={3} borderless stackable>
                    <Container>
                        <Menu.Item>
                          <Link to="/dashboard" className="left">
                              <Header as='h3'>Home</Header>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/dashboard" className="" id="logo">Clearity</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/login" className="right">
                              <div className="ui primary button" id="theme-blue">Log out</div>
                          </Link>
                        </Menu.Item>
                    </Container>
                </Menu>

                <Container id="cards-container">
                    <Card.Group>
                        <Link to={{pathname:"/class", state:{title: "The Art of Web Programming", classId: "1a2s3d"}}}>
                            <Card className="card-element">
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
                        </Link>
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

                        <Card raised>{additionalCard}</Card>
                  </Card.Group>
                </Container>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.array,
    isInstructor: PropTypes.bool,
}

export default Dashboard
