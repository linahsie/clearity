import React, { Component } from 'react'
import { Button, Input, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Register.scss'
import * as _CONFIG from '../_config/Config.js'


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                password: '',
                email: '',
                courses: []
            },
            inputList: [],
            showStudent: false,
            showInstructor: false,
            message: ''
        };
        this.ChangeToStudent = this.ChangeToStudent.bind(this);
        this.ChangeToInstructor = this.ChangeToInstructor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCourses = this.onChangeCourses.bind(this);
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        if(this.state.showInstructor===true){
            axios.post(_CONFIG.devURL + '/register', {
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
            is_instructor: this.state.showInstructor
          })
          .then(function (response) {
            console.log(response);
            location.href = '/dashboard';
          })
          .catch(function (error) {
            console.log(error);
            this.setState({
                     message: 'Unable to register'
                 })
          });
        }
        else{
            var id = 0;
            for(id = 1; id < this.user.courses.length; id++){
                axios.put(_CONFIG.devURL + '/add-class', {
                    course: this.state.user.courses[i]
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                    this.setState({
                             message: 'Unable to register class'
                         })
                  });
            }
            
            axios.post(_CONFIG.devURL + '/register', {
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
            is_instructor: this.state.showInstructor
          })
          .then(function (response) {
            console.log(response);
            location.href = '/dashboard';
          })
          .catch(function (error) {
            console.log(error);
            this.setState({
                     message: 'Unable to register '
                 })
          });
        }
    }
    ChangeToStudent() {
        this.setState({
            showStudent: true,
            showInstructor: false
        });
    }
    ChangeToInstructor() {
        this.setState({
            showStudent: false,
            showInstructor: true
        });
    }
    onChangeName(e) {
        const user = this.state.user;
        user.name = e.target.value;
        this.setState({
            user
        })
    }

    onChangeEmail(e) {
        const user = this.state.user;
        user.email = e.target.value;
        this.setState({
            user
        })
    }

    onChangePassword(e) {
        const user = this.state.user;
        user.password = e.target.value;
        this.setState({
            user
        })
    }
    onChangeCourses(e) {
        const user = this.state.user;
        user.courses = e.target.value;
        this.setState({
            user
        })
    }
    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<Input label="Course Code" class="pad" onChange={this.onChangeCourses} />)
        });
    }
    render() {
        console.log(this.props.student)
        return(
            <div>
              <div className="ui vertical masthead center aligned segment landing-image">
                <div className="ui container">
                  <div className="ui large inverted secondary network menu">
                    <Link to="/" className="item" id="logo">Clearity</Link>
                    <div className="right item">
                        <Link to="/login" className="item">
                      <a className="ui button">Log in</a>
                      </Link>
                        <Link to="/register" className="item">
                      <a className="ui primary button" id="theme-blue">Sign Up</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <form className="Register" action="/" onSubmit={this.onSubmit}>
                    <Card className="Register__content">
                        <div>
                            <h1>Register</h1>
                            <div className="ui primary button" id={this.state.showStudent===true? "theme-blue" : "theme-white"} onClick={this.ChangeToStudent}>
                                As Student
                            </div>
                            <div className="ui primary button" id={this.state.showInstructor===true? "theme-blue" : "theme-white"} onClick={this.ChangeToInstructor}>
                                As Instructor
                            </div>
                            <div className={this.state.showStudent ? '' : 'hidden'}>
                                <br/>
                                <Input label="Name" onChange={this.onChangeName} />
                                <br/><br/>
                                <Input label="Email" onChange={this.onChangeEmail} />
                                <br/><br/>
                                <Input label="Password" onChange={this.onChangePassword} />
                                <br/><br/>
                                <Input label="Course Code" onChange={this.onChangeCourses} />
                                <br/><br/>
                                {this.state.inputList.map(function(input, index) {
                                    return input;
                                })}
                                <div className="ui basic button pad" onClick={this.onAddBtnClick}>
                                  Add Course
                                </div>

                            </div>
                            <div className={this.state.showInstructor ? '' : 'hidden'}>
                                <br/>
                                <Input label="Name" onChange={this.onChangeName} />
                                <br/><br/>
                                <Input label="Email" onChange={this.onChangeEmail} />
                                <br/><br/>
                                <Input label="Password" onChange={this.onChangePassword} />
                                <br/><br/>
                            </div>
                            <p>{this.state.message}</p>
                            <Input type="submit" id="theme-blue"/>
                            <h4>Already registered? Click <Link to="/login">here</Link> to Log-in!</h4>
                        </div>
                    </Card>
                </form>
              </div>
            </div>
        )
    }
}

export default Register
