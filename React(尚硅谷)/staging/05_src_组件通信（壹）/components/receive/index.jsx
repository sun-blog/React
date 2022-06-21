import React, { Component } from "react";

export default class index extends Component {
	render() {
		const { msg } = this.props;
		return <h1>{msg ? msg : "等待数据发送"}</h1>;
	}
}
