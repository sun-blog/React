import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import "./index.css";

export default class index extends Component {
	// 对接受的props进行：类型、必要性限制
	static propTypes = {
		addFrameWork: PropTypes.func.isRequired,
	};

	// 添加时，回车确认事件
	handleKeyUp = (e) => {
		const { target, keyCode } = e;
		if (keyCode !== 13) return;
		if (target.value == "") {
			alert("输入不能为空！");
			return;
		}
		const frameWorkObj = {
			id: nanoid(),
			name: target.value,
			isChecked: false,
		};
		this.props.addFrameWork(frameWorkObj);
		target.value = "";
	};

	render() {
		return (
			<div className="todo-header">
				<input
					type="text"
					placeholder="请输入框架名称，按回车键确认"
					onKeyUp={this.handleKeyUp}
				/>
			</div>
		);
	}
}
