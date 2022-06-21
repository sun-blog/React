import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class index extends Component {
	// 发送数据
	sendMsg = () => {
		const { value } = this.keyWord;
        // 发送消息
		PubSub.publish("sendMsg", value);
	};

	render() {
		return (
			<div>
				<input type="text" ref={(c) => (this.keyWord = c)} />
				<button onClick={this.sendMsg}>点击发送数据</button>
			</div>
		);
	}
}
