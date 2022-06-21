import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import Item from "../Item";

export default class index extends Component {
	// 对接受的props进行：类型、必要性限制
	static propTypes = {
		frameWorks: PropTypes.array.isRequired,
		updateFrameWork: PropTypes.func.isRequired,
		deleteFrameWork: PropTypes.func.isRequired,
	};

	render() {
		const { frameWorks, updateFrameWork, deleteFrameWork } = this.props;
		return (
			<ul className="todo-main">
				{frameWorks.map((frameWork) => {
					return (
						<Item
							key={frameWork.id}
							{...frameWork}
							updateFrameWork={updateFrameWork}
							deleteFrameWork={deleteFrameWork}
						/>
					);
				})}
			</ul>
		);
	}
}
