import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

import styles from './Example.scss'

class Example extends Component {

    render() {
        return(
            <div className="Example">
                    <h1>This is another page!</h1>
                    <Link to="/">
                        <Button>
                            Click here to go back
                        </Button>
                    </Link>
            </div>
        )
    }

}

export default Example
