import React, { Component } from 'react';

// 
import qs from 'querystring'

const content = [
    {
        id: '001',
        content: 'Vue',
    },
    {
        id: '002',
        content: 'React',
    },
    {
        id: '003',
        content: 'Java',
    },
];

export default class Detail extends Component {
    render() {
        // 接收search参数
        const {search} = this.props.location
        const {id,title} = qs.parse(search.slice(1))
        const findContent = content.find((obj) => {
            return obj.id === id
        });
        return (
            <div>
                <li>ID：{id}</li>
                <li>TITLE：{title}</li>
                <li>CONTENT：{findContent.content}</li>
            </div>
        );
    }
}
