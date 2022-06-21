## 理解

1. 组件从创建到死亡会经历一些特定的阶段
2. `React`组件中包含一系列钩子函数（生命周期回调函数），会在特定的时刻调用
3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作

## 生命周期（旧）

![](D:\Project\Personal\frontEnd-knowledge\React\文档\imgs\react生命周期(旧).png)

+ 初始化阶段：由`ReactDOM.render()`触发 -- 初次渲染
  1. `constructor()`
  2. `componentWillMount()`
  3. `render()`：初始化渲染或更新渲染调用
  4. `componentDidMount()`：在此钩子中做初始化的事，例如：开启定时器、发送网络请求、订阅消息
+ 更新阶段：由组件内部`this.setState()`或父组件重新`render`触发
  1. `shouldComponentUpdate()`
  2. `componentWillUpdate()`
  3. `render()`
  4. `componentDidUpdate()`
+ 卸载组件：由`ReactDOM.unmountComponentAtNode()`触发
  1. `componentWillUnmount()`：在此钩子中做收尾的事，例如：关闭定时器、取消订阅消息

## 生命周期（新）

![react生命周期(新)](D:\Project\Personal\frontEnd-knowledge\React\文档\imgs\react生命周期(新).png)

+ 初始化阶段：由`ReactDOM.render()`触发  --  初次渲染
  1. `constructor()`
  2. `getDerivedStateFromProps()`
  3. `render()`：初始化渲染或更新渲染调用
  4. `componentDidMount()`：开启监听，发送`ajax`请求
+ 更新阶段：由组件内部`this.setState()`或父组件重新render触发
  1. `getDerivedStateFromProps()`
  2. `shouldComponentUpdate()`
  3. `render()`
  4. `getSnapshotBeforeUpdate()`
  5. `componentDidUpdate()`
+ 卸载阶段：由`ReactDOM.unmountComponentAtNode()`触发
  1. `componentWillUnmount()`：做一些收尾工作，如：清理定时器