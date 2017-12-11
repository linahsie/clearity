import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Button, Card, Image, Icon, Modal, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import * as _CONFIG from '../_config/Config.js'

import styles from './Dashboard.css'

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            classes : [],
            add_class: '',
            create_class: ''
        }
        this.addClass = this.addClass.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.createClass = this.createClass.bind(this);
        this.createCourse = this.createCourse.bind(this);

    }

    componentDidMount(){
         const email = encodeURIComponent(this.props.location.state.user.email);
         const password = encodeURIComponent(this.props.location.state.user.password);
         const formData = `email=${email}&password=${password}`;

        axios.post( 'http://localhost:3000/api/login', formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        /*
        * GET calls here to populate classes
        */
        axios.get(`http://localhost:3000/api/home`)
            .then(res => {
            classes = res.map(obj => obj.data);
            this.setState({ classes });
            console.log(res);
        });

    }
    addClass(e){
        e.preventDefault();
        axios.put(_CONFIG.devURL + '/add-class', {
            course: this.state.add_class
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    addCourse(e){
        this.setState({
            add_class: e.target.value
        });
    }
    createClass(e){
        e.preventDefault();
        axios.post(_CONFIG.devURL + '/create-class', {
            course: this.state.create_class
          })
          .then(function (response) {
            console.log(response);
            //returns course code

          })
          .catch(function (error) {
            console.log(error);
          });
    }
    createCourse(e){
        this.setState({
            create_class: e.target.value
        });
    }
    render() {
        //const { activeItem } = this.state
        // console.log(this);
        console.log(this.props.location.state);
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
                              <Card.Description>Fall 2017</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button id="theme-green" fluid>Join</Button>
                            </Card.Content>
                        </Card>
                        </Link>
                        <Card className="card-element">
                            <Card.Content>
                              <Card.Description textAlign="right">
                                <Icon name='circle'/>Offline
                              </Card.Description>
                              <Card.Header>CS 465</Card.Header>
                              <Card.Meta>User Interface Design</Card.Meta>
                              <Card.Description>Fall 2017</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='grey' disabled>Join</Button>
                                </div>
                            </Card.Content>
                        </Card>
                        <Modal size='mini' trigger={
                        <Card>
                                <Card.Content textAlign="center" className="add-create">
                                    <Icon name='plus' color="grey"/>
                                    <Header as='h3' color="grey">Create a class</Header>
                                </Card.Content>
                        </Card>
                    }>
                    <Modal.Header>
            Create a Class
          </Modal.Header>
          <Modal.Content>
<Input label="Course Name" onChange={this.createCourse} />
          </Modal.Content>
          <Modal.Actions>
            <Button id="theme-blue" onClick={this.createClass}>Create Class</Button>
            <Button>
              Cancel
            </Button>
          </Modal.Actions>
          {this.state.add_class==='' ? '' : <div>Course Created: {this.state.add_class}</div>}
  </Modal>
                        <Modal size='mini' trigger={
                        <Card>
                                <Card.Content textAlign="center" className="add-create">
                                    <Icon name='plus' color="grey"/>
                                    <Header as='h3' color="grey">Add a class</Header>
                                </Card.Content>
                        </Card>
                    }>
                    <Modal.Header>
            Add a Class
          </Modal.Header>
          <Modal.Content>
<Input label="Course Code" text="Enter your Course Entry Code" onChange={this.addCourse} />
          </Modal.Content>
          <Modal.Actions>
            <Button id="theme-blue" onClick={this.addClass}>Add Class</Button>
            <Button>
              Cancel
            </Button>
          </Modal.Actions>
  </Modal>
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
/*
//CODE FOR TEACHER QUESTION
{/*<Modal size='small' trigger={}>
    <Modal.Header>
            Instructor Question
          </Modal.Header>
          <Modal.Content>
          What is the purpose?
<Form>
        <Form.Field>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer A'
            name='checkboxRadioGroup'
            value='A'
            checked={this.state.value === 'A'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer B'
            name='checkboxRadioGroup'
            value='B'
            checked={this.state.value === 'B'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id="theme-blue" onClick={this.answerQuestion}>Answer Question</Button>
            <Button>
              Cancel
            </Button>
          </Modal.Actions>
  </Modal>
}*/

export default Dashboard
