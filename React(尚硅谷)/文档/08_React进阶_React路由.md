## SPA理解

1. 单页Web应用（`single page web application`，`SPA`）
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面，只会做页面的局部更新
4. 数据都需要通过`ajax`请求获取，并在前端异步展现

## 路由理解

### 路由定义

1. 一个路由就是一个映射关系（`key:value`）
2. `key`为`路径`，`value`可能是`function`或`component`

### 路由分类

1. 后端路由：
   - 理解：`value`是`function`，用来处理客户端提交的请求
   - 注册路由：`router.get(path,function(req,res))`
   - 工作过程：当`node`接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回想用数据
2. 前端路由：
   - 浏览器端路由，`value`是`component`，用于展示页面内容
   - 注册路由：`<Route path='/test' component={Test}>`
   - 工作过程：当浏览器的`path`变为`/test`时，当前路由组件就会变为`Test组件`

## 路由组件与一般组件

1. 写法不同

   一般组件：`<Demo/>`

   路由组件：`<Route path='/demo' component={Demo}>`

2. 存放位置不同

   一般组件：`component`

   路由组件：`pages`

3. 接收到的`props`不同

   一般组件：写组件标签时传递了什么，就能收到什么

   路由组件：接收到三个固定的属性

   -  **history**:
     - **go**: *ƒ go(n)**
     - **goBack**: *ƒ goBack()*
     - **goForward**: *ƒ goForward()*
     - **push**: *ƒ push(path, state)*
     - **replace**: *ƒ replace(path, state)*
   -  **location**:
        - **pathname**: "/home"
        - **search**: ""
        - **state**: undefined
   -  **match**:
        - **params**: {}
        - **path**: "/home"
        - **url**: "/home"

## NavLink与封装NavLink

1. `NavLink`可以实现路由链接的高亮，通过`activeClassName`指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过`this.props.children`可以获取标签内容

## Switch的使用

1. 通常情况下，`path`和`component`是一一对应的关系
2. `Switch`可以提高路由匹配效率（`单一匹配`）

```js
<Switch>
    <Route path="/home" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Redirect to="/home"></Redirect>
</Switch>
```



## 解决多级路径刷新样式丢失问题

1. `public/index.html`中引入样式时不写`./`写`/`（常用）
2. `public/index.html`中引入样式时不写`./`写`%PUBLIC_URL%`（常用）
3. 使用`HasgRouter`

```js
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="stylesheet" href="/css/bootstrap.css">
```



## 路由的严格匹配和模糊匹配

1. 默认使用的时模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：`<Route exact path="/about" component = {About}></Route>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

```js
<Switch>
    {/* exact：开启精准匹配 */}
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Redirect to="/home"></Redirect>
</Switch>
```



## 嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

```js
<ul className="nav nav-tabs">
    <li>
    	<MyNavLink to="/home/homenews">News</MyNavLink>
    </li>
    <li>
    	<MyNavLink to="/home/homemessage">Message</MyNavLink>
    </li>
</ul>
<div>
    <Switch>
        <Route path="/home/homenews" component={News}></Route>
        <Route path="/home/homemessage" component={Message}></Route>
        <Redirect to="/home/homenews"></Redirect>
    </Switch>
</div>
```

## 路由组件传参

### params参数

1. 路由链接（携带参数）：`<Link to = {`/home/homemessage/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>`
2. 注册路由（声明接收）：`<Route path = "/home/homemessage/detail/:id/:title" *component*={Detail}></Route>`
3. 接收参数：`const { id, title } = this.props.match.params;`

```jsx
return (
    <div>
    	<ul>
    		{message.map((msgObj) => {
    			return <li key={msgObj.id}>
        			{/* 向路由传递params参数 */}
    				<Link to={`/home/homemessage/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
				</li>;
			})}
		</ul>

        {/* 声明接收params参数 */}
		<Route path="/home/homemessage/detail/:id/:title" component={Detail}></Route>
	</div>
);

// 接收参数
render() {
	const { id, title } = this.props.match.params;
	return (
		<div>
			<li>ID：{id}</li>
			<li>TITLE：{title}</li>
		</div>
	);
}
```

### search参数

1. 路由链接（携带参数）：`<Link to = {`/home/homemessage/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>`

2. 注册路由（无需声明，正常注册即可）：`<Route path = "/home/homemessage/detail" component = {Detail}></Route>`

3. 接收参数：`const {search} = this.props.location`

      				 `const {id,title} = qs.parse(search.slice(1))`

4. 备注：获取到的`search`是`urlencoded`编码字符串，需要借助`querystring`解析；若`querystring`使用时报错，需安装之后重新启动

```jsx
return (
    <div>
        <ul>
            {message.map((msgObj) => {
                return (
                    <li key={msgObj.id}>
                        {/* 向路由传递search参数 */}
                        <Link to={`/home/homemessage/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                    </li>
                );
            })}
        </ul>

        {/* search参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/homemessage/detail" component={Detail}></Route>
    </div>
);

// 接收search参数
import qs from 'querystring'

render() {
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))
    const findContent = content.find((obj) => {
        return obj.id === id
    });
    return (
        <div>
            <li>ID：{id}</li>
            <li>TITLE：{title}</li>
            <li>CONTENT：{findContent.content}</li>
        </div>
    );
}
```

### state参数

1. 路由链接（携带参数）：`<Link to = {{ pathname: '/home/homemessage/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>`
2. 注册路由（无需声明，正常注册即可）：`<Route path = "/home/homemessage/detail" component = {Detail}></Route>`
3. 接收参数：`const { id, title } = this.props.location.state || {};`
4. 备注：刷新也保留参数

```jsx
return (
    <div>
        <ul>
            {message.map((msgObj) => {
                return (
                    <li key={msgObj.id}>
                        {/* 向路由传递state参数 */}
                        <Link to={{ pathname: '/home/homemessage/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                    </li>
                );
            })}
        </ul>

        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/homemessage/detail" component={Detail}></Route>
    </div>
);

render() {
    // 接收state参数
    const { id, title } = this.props.location.state || {};
    const findContent =
          content.find((obj) => {
              return obj.id === id;
          }) || {};
    return (
        <div>
            <li>ID：{id}</li>
            <li>TITLE：{title}</li>
            <li>CONTENT：{findContent.content}</li>
        </div>
    );
}
```

## 编程式路由导航

- 借助`this.props.history`对象上的`API`，操作路由跳转、前进、后退
  - `this.props.history.push()`：
  - `this.props.history.replace()`
  - `this.props.history.goBack()`
  - `this.props.history.goForward()`
  - `this.props.history.go()`

## BrowerRouter与HashRouter的区别

1. 底层原理不一样
   - `BrowerRouter`使用的是`H5`的`history API`，不兼容`IE9`及以下版本
   - `HashRouter`使用的是`URL`的`哈希值`
2. `url`表现形式不一样
   - `BrowerRouter`的路径中没有`#`
   - `HashRouter`的路径包含`#`
3. 刷新后对路由`state`参数的影响
   - `BrowerRouter`没有任何影响，因为`state`保存在`history对象`中
   - `HashRouter`刷新后会导致路由`state参数`的丢失
4. 备注：`HashRouter`可以用于解决一些路径错误相关的问题

## withRouter

- 可以加工一般组件，让一般组件具备路由组件所特有的API；withRouter的返回值是一个新组件

