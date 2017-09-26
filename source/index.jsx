import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import Example from './components/Example/Example.jsx';

// Include any new stylesheets here
require('./styles/main.scss');

render(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>

            {/*
                Add routes for new pages here!
                Here's an example. To view this route, just go to http://localhost:8080/example
            */}
            <Route exact path="/example" component={Example}/>
        </div>
    </Router>,
    document.getElementById('app')
);
