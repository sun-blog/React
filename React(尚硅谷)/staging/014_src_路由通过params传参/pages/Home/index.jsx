import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MyNavLink from '../../components/MyNavLink';

import News from './News';
import Message from './Message';

export default class index extends Component {
    render() {
        return (
            <div>
                <h2>Home页面</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/homenews">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/homemessage">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/homenews" component={News}></Route>
                            <Route path="/home/homemessage" component={Message}></Route>
                            <Redirect to="/home/homenews"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
