import React, { Component } from "react";
import axios from "axios";

// 创建并暴露App组件
export default class App extends Component {
	// 发送请求
	sendRequest = () => {
		axios
			.get("https://www.fastmock.site/mock/5b0c9512da5bee1e7c5fd7f8e36d9d70/react/axios")
			.then((res) => {
				console.log("请求发送成功", res.data.data);
			})
			.catch((err) => {
				console.log("请求发送失败", err.data.data);
			});
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.sendRequest}>点击发送请求</button>
			</div>
		);
	}
}
