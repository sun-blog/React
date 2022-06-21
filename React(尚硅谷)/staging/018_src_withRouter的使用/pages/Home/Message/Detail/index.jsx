import React, { Component } from 'react';

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
        // 接收state参数
        const { id, title } = this.props.location.state || {};
        const findContent =
            content.find((obj) => {
                return obj.id === id;
            }) || {};
        return (
            <div>
                <li>ID：{id}</li>
                <li>TITLE：{title}</li>
                <li>CONTENT：{findContent.content}</li>
            </div>
        );
    }
}
