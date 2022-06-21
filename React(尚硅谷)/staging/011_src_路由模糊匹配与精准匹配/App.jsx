import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MyNavLink from './components/MyNavLink';
import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <MyNavLink to="/home/1/2">Home</MyNavLink>
                    <br />
                    <MyNavLink to="/about">About</MyNavLink>
                </div>

                <div>
                    <Switch>
                        {/* exact：开启精准匹配 */}
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
