import React, { Component } from 'react';

export default class App extends Component {
    state = {
        data: 'data',
    };

    componentDidMount() {
        // setState 处在同步的逻辑中，异步更新状态，更新真实dom
        this.setState({
            data: '同步逻辑',
        });
        console.log(this.state.data);

        // setState 处在异步的逻辑中，同步更新状态，同步更新真实dom
        setTimeout(() => {
            this.setState({
                data: '异步逻辑',
            });
            console.log(this.state.data);
        });
    }

    render() {
        return <div></div>;
    }
}
