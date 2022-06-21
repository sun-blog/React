import React, { Component } from "react";
import "./App.css";

// 引入组件
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

// 创建并暴露App组件
export default class App extends Component {
	// 初始化数据
	state = {
		frameWorks: [
			{ id: "001", name: "Vue", isChecked: true },
			{ id: "002", name: "React", isChecked: true },
			{ id: "003", name: "Angular", isChecked: false },
		],
	};

	// 添加FrameWork对象
	addFrameWork = (frameWorkObj) => {
		// 解构原有数据
		const { frameWorks } = this.state;
		// 将两组数据合并
		const newFrameWork = [frameWorkObj, ...frameWorks];
		// 将新数据覆盖旧数据
		this.setState({ frameWorks: newFrameWork });
	};

	// 更新FrameWork对象状态
	updateFrameWork = (id, done) => {
		const { frameWorks } = this.state;
		// 使用数组map方法遍历，通过展开语法，将对象表达式按key-value的方式展开，同时修改相应数据的状态值
		const newFrameWorks = frameWorks.map((frameWorkObj) => {
			if (frameWorkObj.id === id) {
				return { ...frameWorkObj, isChecked: done };
			} else {
				return frameWorkObj;
			}
		});
		this.setState({ frameWorks: newFrameWorks });
	};

	// 删除FrameWork对象
	deleteFrameWork = (id) => {
		const { frameWorks } = this.state;
		const deleteFrameWorks = frameWorks.filter((frameWorkObj) => {
			return frameWorkObj.id !== id;
		});
		this.setState({ frameWorks: deleteFrameWorks });
	};

	// 全选
	handleCheckAll = (chechState) => {
		const { frameWorks } = this.state;
		const newFrameWorks = frameWorks.map((frameWorkObj) => {
			return { ...frameWorkObj, isChecked: chechState };
		});
		this.setState({ frameWorks: newFrameWorks });
	};

	// 清除已完成的
	deleteFinishObj = () => {
		const { frameWorks } = this.state;
		const newnewframeWorks = frameWorks.filter((frameWorkObj) => {
			return !frameWorkObj.isChecked;
		});
		this.setState({ frameWorks: newnewframeWorks });
	};

	render() {
		return (
			<div className="App">
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addFrameWork={this.addFrameWork} />
						<List
							frameWorks={this.state.frameWorks}
							updateFrameWork={this.updateFrameWork}
							deleteFrameWork={this.deleteFrameWork}
						/>
						<Footer
							frameWorks={this.state.frameWorks}
							handleCheckAll={this.handleCheckAll}
							deleteFinishObj={this.deleteFinishObj}
						/>
					</div>
				</div>
			</div>
		);
	}
}
