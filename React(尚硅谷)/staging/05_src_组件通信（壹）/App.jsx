import React, { Component } from "react";

import Send from "./components/send";
import Receive from "./components/receive";

export default class App extends Component {
	// 初始化数据
	state = {
		msg: "",
	};

	// 获取发送的数据
	getSendMsg = (msg) => {
		this.setState({ msg });
	};

	render() {
		const { msg } = this.state;
		return (
			<div>
				<Send getSendMsg={this.getSendMsg}></Send>
				<Receive msg={msg}></Receive>
			</div>
		);
	}
}
