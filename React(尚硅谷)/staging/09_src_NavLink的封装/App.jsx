import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MyNavLink from './components/MyNavLink';
import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <MyNavLink to="/home">Home</MyNavLink>
                    <br />
                    <MyNavLink to="/about">About</MyNavLink>
                </div>

                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </div>
        );
    }
}
