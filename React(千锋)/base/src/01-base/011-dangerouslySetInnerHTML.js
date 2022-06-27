import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    // 初始化数据
    state = {
        list: [],
    };

    // 获取数据
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                let newData = res.data.slice(0, 5);
                this.setState({
                    list: newData,
                });
            })
            .catch((err) => console.log("Couldn't fetch data. Error: " + err));
    }

    myref = React.createRef();
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={this.addInfo}>添加</button>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={item.id}>
                            {/* {item.title} */}
                            {/* 方式一：通过bind传递参数 */}
                            {/* <button onClick={this.delInfo.bind(this,index)}>删除</button> */}

                            <span
                                dangerouslySetInnerHTML={{
                                    __html: item.title,
                                }}
                            ></span>

                            {/* 方式二：通过匿名箭头函数的形式传参；常用方式 */}
                            <button onClick={() => this.delInfo(index)}>删除</button>
                        </li>
                    ))}
                </ul>
                {this.state.list.length === 0 && <div>暂无数据</div>}
            </div>
        );
    }

    // 添加事件
    addInfo = () => {
        if (this.myref.current.value.length == 0) {
            console.log('不能输入空值');
        } else {
            let newList = [...this.state.list];
            newList.push({
                body: '',
                id: Date.now(),
                title: this.myref.current.value,
                userId: 1,
            });
            this.setState({
                list: newList,
            });
            // 清空数组
            this.myref.current.value = '';
        }
    };

    // 删除事件
    delInfo = (index) => {
        let newList = this.state.list.concat();
        newList.splice(index, 1);
        this.setState({
            list: newList,
        });
    };
}
