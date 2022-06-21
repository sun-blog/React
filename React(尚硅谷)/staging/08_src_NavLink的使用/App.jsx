import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink activeClassName='testActive' to="/home">Home</NavLink>
                    <br />
                    <NavLink activeClassName='testActive' to="/about">About</NavLink>
                </div>

                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </div>
        );
    }
}
