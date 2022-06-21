import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// 一般组件
import Header from './components/Header'
import MyNavLink from './components/MyNavLink';

// 路由组件
import Home from './pages/Home';
import About from './pages/About';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* exact：开启精准匹配 */}
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/about" component={About}></Route>
                                    <Redirect to="/home"></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
