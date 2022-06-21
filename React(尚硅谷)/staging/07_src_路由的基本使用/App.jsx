import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/home">Home</Link>
                    <br />
                    <Link to="/about">About</Link>
                </div>

                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </div>
        );
    }
}
