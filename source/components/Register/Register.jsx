import React, { Component } from 'react'
import { Button, Input, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Register.scss'
import * as _CONFIG from '../_config/Config.js'


class Register extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: '',
                password: '',
                email: '',
                courses: []
            },

            message: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCourses = this.onChangeCourses.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.user.username);
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `name=${name}&email=${email}&password=${password}`;

        // create an AJAX POST request (This should probably done with Axios instead)
        const xhr = new XMLHttpRequest();
        xhr.open('post', _CONFIG.devURL);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log('The form is valid');
                location.href = '/dashboard';
            } else {
                this.setState({
                    message: 'Unable to register'
                })
            }
        });
        xhr.send(formData);
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
    render() {
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
                <Card className="Register__content pad">
                    <div>
                        <h1>Register</h1>
                        <div className="ui primary button" id="theme-blue">
                            As Student
                        </div>
                        <div className="ui primary button" id="theme-white">
                            As Instructor
                        </div>
                        <div className="register_student">
                            <br/>
                            <Input label="Name" onChange={this.onChangeName} />
                            <br/><br/>
                            <Input label="Email" onChange={this.onChangeEmail} />
                            <br/><br/>
                            <Input label="Password" onChange={this.onChangePassword} />
                            <br/><br/>
                            <Input label="Course Code" onChange={this.onChangePassword} />
                            <br/><br/>
                            <button class="ui basic button">
                              Add Course
                            </button>
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
