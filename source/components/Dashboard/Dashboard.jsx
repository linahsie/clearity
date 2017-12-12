import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Menu, Container, Button, Card, Image, Icon, Modal, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'
import * as _CONFIG from '../_config/Config.js'

import styles from './Dashboard.scss'
import styles2 from '../../assets/font-awesome/css/font-awesome.min.css'

class Dashboard extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            user: this.props.location.state.user,
            classes : this.props.location.state.user.classes,
            classIds : this.props.location.state.user.course_ids,
            isActive : [],
            add_class: '',
            create_class: '',
            user: this.props.location.state,
            isInstructor: this.props.location.state.user.is_instructor,
            modalOpen: false
        }
        this.addClass = this.addClass.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.createClass = this.createClass.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    updateActive = () => {
        console.log('checking');
        let component = this;
        axios.get(_CONFIG.devURL + '/active').then(function(response){
            component.setState({isActive: response.data.activeClasses})
        });
    }

    componentDidMount(){
        this.updateActive();
        this.interval = setInterval(this.updateActive(), 500);
    }

    componentWillUnmount(){
        console.log('unmount');
        clearInterval(this.setInterval);
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    addClass(e){
        e.preventDefault();
        let component = this;
        let currClass = this.state.classes;
        let currIDs = this.state.classIds;
        axios.put(_CONFIG.devURL + '/add-class', {
            course: this.state.add_class,
            user: this.state.user.user
          })
          .then(function (response) {
              console.log(response);
              currClass.push(response.data);
              currIDs.push(component.state.add_class);
              component.setState({
                  classes : currClass,
                  classIds : currIDs
              });
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
            course: this.state.create_class,
            user: this.state.user
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

    /*

    <Card.Meta>{item}</Card.Meta>
    <Card.Description>{_COURSE TERM_}</Card.Description>
    */

    generateClassCard = (item, index) => {
        let active = _.indexOf(this.state.isActive, this.state.classIds[index]) !== -1;
        let activeIcon = null
        let activeText = ""
        let joinButton = null
        if(active){
            activeIcon = <img className="p-10" src="https://png.icons8.com/filled-circle/p1em/10/2ecc71"/>
            activeText = "Live"
            joinButton = <Button id="theme-green" fluid>Join</Button>
        }else{
            activeIcon = <img className="p-10" src="https://png.icons8.com/filled-circle/p1em/10/666666"/>
            activeText = "Offline"
            joinButton = <Button disabled={!active} fluid>Join</Button>
        }
        return( <Link key={index} to={{pathname:"/class", state:{title: item, user: this.props.location.state.user, classId: this.state.classIds[index], isActive: active}}}>
        <Card className="card-element">
            <Card.Content>
              <Card.Description textAlign="right">
                  {activeIcon}{activeText}
              </Card.Description>
              <Card.Header>{item.toUpperCase()}</Card.Header>
              <br></br>
              <br></br>
            </Card.Content>
            <Card.Content extra>
                {joinButton}
            </Card.Content>
        </Card>
    </Link>)
    }

    render() {
        console.log(this.props.location.state);
        let additionalCard = null;
        if (this.state.isInstructor) {

          additionalCard = <Modal size='mini'
              open={this.state.modalOpen}
              onClose={this.handleClose}
              trigger={
              <Card onClick={this.handleOpen}>
                <Card.Content textAlign="center" className="add-create">
                    {/*<Icon className="our-icon" name='plus' color="grey"/>*/}
                    <Image size="tiny" src="http://icons.iconarchive.com/icons/icons8/ios7/128/Household-Hammer-icon.png"/>
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
                    <Button onClick={this.handleClose}>
                        Cancel
                    </Button>
                </Modal.Actions>
                {this.state.add_class==='' ? '' : <div>Course Created: {this.state.add_class}</div>}
          </Modal>
        } else {
          additionalCard = <Modal size='mini'
              open={this.state.modalOpen}
              onClose={this.handleClose}
              trigger={
              <Card onClick={this.handleOpen}>
                      <Card.Content textAlign="center" className="add-create">
                          {/*<Icon className="our-icon" name='plus' color="grey"/>*/}
                          <Image size="tiny" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"/>
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
              <Button onClick={this.handleClose}>
                Cancel
              </Button>
              </Modal.Actions>
          </Modal>
        }
        return(
            <div>
                <Menu fluid widths={3} borderless stackable>
                    <Container>
                        <Menu.Item>
                          <Link to={{pathname:"/dashboard", state: this.props.location.state}} className="left">
                              <Header as='h3'>Home</Header>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to={{pathname:"/dashboard", state: this.props.location.state}} className="" id="logo">Clearity</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/login" className="right">
                              <div className="ui primary button" id="theme-blue">Log out</div>
                          </Link>
                        </Menu.Item>
                    </Container>
                </Menu>

                <Container>
                    <Card.Group id="cards-container">
                        {this.state.classes.map(this.generateClassCard)}
                        {additionalCard}
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
