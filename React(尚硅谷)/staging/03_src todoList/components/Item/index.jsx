import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
	// 修改选中状态
	handleChange = (id) => {
		return (e) => {
			this.props.updateFrameWork(id, e.target.checked);
		};
	};

	// 删除对象
	deleteFrameWork = (id) => {
		return () => {
			if (window.confirm("是否删除？")) {
				this.props.deleteFrameWork(id);
			}
		};
	};

	render() {
		const { id, name, isChecked } = this.props;
		return (
			<li>
				<label>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={this.handleChange(id)}
					/>
					<span>{name}</span>
				</label>
				<button
					className="btn btn-danger"
					onClick={this.deleteFrameWork(id)}
					style={{ display: "none" }}
				>
					删除
				</button>
			</li>
		);
	}
}
