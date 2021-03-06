import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

class Home extends Component {
    render() {
        return(
            <div className="wrapper-home">
              <div className="ui vertical masthead center aligned segment landing-image">
                <div className="ui container">
                  <div className="ui large inverted secondary network menu">
                    <Link to="/" className="item" id="logo">Clearity</Link>
                    <div className="right item">
                        <Link to="/login" className="item">
                      <Button className="ui button">Log in</Button>
                      </Link>
                        <Link to="/register" className="item">
                      <Button className="ui primary button" id="theme-blue">Sign Up</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="Home">
                  <div className="ui text container" id = "Home_content">
                    <h1 className="ui header" id="title-clearity">
                      Clearity
                    </h1>
                    <h2>
                      Streamline communication between students and educators.
                    </h2>
                    <Link to={{ pathname: '/register', state: { student: true} }} className="item">
                      <div className="ui huge primary button" id="theme-blue">
                        Sign Up as Student
                      </div>
                    </Link>
                    <Link to={{ pathname: '/register', state: { teacher: true} }} className="item">
                      <div className="ui huge primary button" id="theme-blue">
                        Sign Up as Instructor
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Home
