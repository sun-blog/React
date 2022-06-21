## 配置代理

### 方式一

在`package.json`文件中添加如下代码

```js
"proxy": "http://localhost:8091"  // proxy的值替换为需要解决跨域的地址
```

:warning: 说明：

1. 优点：配置简单，前端请求资源时，可以不加任何前缀
2. 缺点：只能配置一个地址

### 方式二

1. 第一步：创建代理配置文件

```js
在src下创建配置文件：src/setupProxy.js
```

2. 编写setupProxy.js配置具体代理规则

```js
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', {  // api1是需求转发的请求（所有带有 /api1 前缀的请求都会转发给5000）
            target: 'http://localhost:8000',  // 配置转发目标地址（能返回数据的服务器地址）
            changeOrigin: true,  // 控制服务器接收到的请求头中host字段的值
            pathRewrite: { '': '' }  // 去除请求前缀，保证交给后台服务器的是正常请求地址（必须配置）
        }),
        proxy('/api2', {
            target: '',
            changeOrigin: true,
            pathRewrite: { '': '' }
        }),
    )
}
```

## 组件传参

### 父子组件传参

```jsx
// App.jsx
export default class App extends Component {
	// 初始化数据
	state = {
		msg: "半夏天南星",
	};

	render() {
		const { msg } = this.state;
		return (
			<div>
				<Receive msg={msg}></Receive>
			</div>
		);
	}
}

// Receive.jsx
export default class index extends Component {
	render() {
		const { msg } = this.props;
		return <h1>{msg ? msg : "等待数据发送"}</h1>;
	}
}
```



### 子父组件传参

```jsx
// App.jsx
export default class App extends Component {
	// 获取发送的数据
	getSendMsg = (msg) => {
		console.log(msg)
	};

	render() {
		return (
			<div>
				<Send getSendMsg={this.getSendMsg}></Send>
			</div>
		);
	}
}

// Send.jsx
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
```



### 跨级组件通信

```jsx
// App.jsx
export default class App extends Component {
	// 初始化数据
	state = {
		msg: "",
	};

	// 获取发送的数据
	getSendMsg = (msg) => {
		this.setState({ msg });
	};

	render() {
		const { msg } = this.state;
		return (
			<div>
				<Send getSendMsg={this.getSendMsg}></Send>
				<Receive msg={msg}></Receive>
			</div>
		);
	}
}

// Send.jsx
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

// Receive.jsx
export default class index extends Component {
	render() {
		const { msg } = this.props;
		return <h1>{msg ? msg : "等待数据发送"}</h1>;
	}
}
```



### 非嵌套组件通信（消息订阅与发布）

```jsx
// Send.jsx
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


// Receive.jsx
import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class index extends Component {
	// 初始化数据
	state = {
		msg: "",
	};

	// 消息接收
	componentDidMount() {
		//发布-订阅者的模式是一对多的模式，一个发布者，多个订阅者可以接收
		//订阅者，pubSub.subscribe第一个参数是消息名称要和发布消息名称一致才可以接受，第二个是接受参数时候收到的回调函数，接受数据时候会触发
		//函数的第一个参数是消息名称，第二个是消息内容,没有第三个参数，第三参数是undefined，想传多个参数时将数据用对象的形式 在 第二个参数传
		this.token = PubSub.subscribe("sendMsg", (_, msg) => {
			this.setState({ msg });
		});
	}
	componentWillUnmount() {
		PubSub.unsubscribe(this.token);
	}

	render() {
		const { msg } = this.state;
		return <h1>{msg ? msg : "等待数据发送"}</h1>;
	}
}

```

1. `publishSync`  --  同步发送消息

2. `publish`  --  同步发送消息

3. `subscribe`  --  订阅消息

4. `unsubscribe`  --  卸载特定订阅

5. `clearAllSubscriptions`  --  清除所有订阅

    