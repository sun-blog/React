import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class index extends Component {
	// 初始化数据
	state = {
		msg: "",
	};

	// 消息接收
	componentDidMount() {
		//发布-订阅者的模式是一对多的模式，一个发布者，多个订阅者可以接收，一个订阅者，接收一个发布者
		//订阅者，pubSub.subscribe第一个参数是消息名称要和发布消息名称一致才可以接受，第二个是接受参数时候收到的回调函数，接受数据时候回触发
		//函数的第一个参数是消息名称，第二个是消息内容,没有第三个参数，第三参数是undefined，相传多个参数用对象在第二个参数传
		this.token = PubSub.subscribe("sendMsg", (_, msg) => {
			this.setState({ msg });
		});
	}
	componentWillUnmount() {
		PubSub.unsubscribe(this.token);
	}

	render() {
		const { msg } = this.state;
		return <h1>{msg ? msg : "等待数据发送"}</h1>;
	}
}
