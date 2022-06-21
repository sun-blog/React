import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
	// 全选
	handleCheckAll = (e) => {
		this.props.handleCheckAll(e.target.checked);
	};

	// 清除已完成的
	deleteFinishObj = () => {
		this.props.deleteFinishObj();
	};

	render() {
		const { frameWorks } = this.props;
		const allNum = frameWorks.length;
		const finishNum = frameWorks.reduce((pre, cur) => {
			return pre + (cur.isChecked ? 1 : 0);
		}, 0);

		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={
							allNum == finishNum && allNum !== 0 ? true : false
						}
						onChange={this.handleCheckAll}
					/>
				</label>
				<span>
					<span>已完成{finishNum}</span> / 全部{allNum}
				</span>
				<button
					className="btn btn-danger"
					onClick={this.deleteFinishObj}
				>
					清除已完成任务
				</button>
			</div>
		);
	}
}
