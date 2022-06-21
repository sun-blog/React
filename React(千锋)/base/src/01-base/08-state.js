import React, { Component } from 'react';

export default class App extends Component {
    state = {
        flag: true,
    };
    render() {
        return (
            <div>
                <h1>欢迎学习React</h1>
                <button onClick={this.collectionEvent}>{this.state.flag == true ? '收藏' : '取消收藏'}</button>
            </div>
        );
    }
    collectionEvent = () => {
        this.setState({
            flag: !this.state.flag,
        });
    };
}
