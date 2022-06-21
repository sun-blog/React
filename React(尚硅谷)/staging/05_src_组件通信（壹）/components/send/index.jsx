import React, { Component } from "react";

export default class index extends Component {
	// 发送数据
	sendMsg = () => {
		const { value } = this.keyWord;
		this.props.getSendMsg(value);
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
