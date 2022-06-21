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
                        return <li key={msgObj.id}>
                            {/* 向路由传递params参数 */}
                            <Link to={`/home/homemessage/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                        </li>;
                    })}
                </ul>

                {/* 声明接收params参数 */}
                <Route path="/home/homemessage/detail/:id/:title" component={Detail}></Route>
            </div>
        );
    }
}
