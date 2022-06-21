import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        message: [
            {
                id: '001',
                title: 'message001',
            },
            {
                id: '002',
                title: 'message002',
            },
            {
                id: '003',
                title: 'message003',
            },
        ],
    };

    render() {
        const { message } = this.state;
        return (
            <div>
                <ul>
                    {message.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                {/* 向路由传递state参数 */}
                                <Link to={{ pathname: '/home/homemessage/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                            </li>
                        );
                    })}
                </ul>

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/homemessage/detail" component={Detail}></Route>
            </div>
        );
    }
}
