import React, { Component } from "react";

import Send from "./components/send";
import Receive from "./components/receive";

export default class App extends Component {
	render() {
		return (
			<div>
				<Send></Send>
				<Receive></Receive>
			</div>
		);
	}
}
