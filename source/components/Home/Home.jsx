import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

class Home extends Component {

    render() {
        return(
            <div className="Home">
                <h1>Welcome to MP2!</h1>

                <Link to="/example">
                    <Button>
                        Click here to see an example route
                    </Button>
                </Link>
            </div>
        )
    }

}

export default Home
