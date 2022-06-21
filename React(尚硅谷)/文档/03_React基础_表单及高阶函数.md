## 理解

- 受控组件就是可以被 react 状态控制的组件
- 在 `react` 中，`input`、` textarea` 等组件默认是非受控组件（输入框内部的值是用户控制，和React无关）但是也可以转化成受控组件，就是通过 `onChange` 事件获取当前输入内容，将当前输入内容作为 value 传入，此时就成为受控组件
- 好处：可以通过 `onChange` 事件控制用户输入，使用正则表达式过滤不合理输入

## 非受控组件

### 代码演示

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>

<script type="text/babel">
    class Login extends React.Component {
        handleSubmit = (e) => {
            e.preventDefault()  // 阻止表单提交
            const { username, password } = this
            alert(`您输入的用户名是${username.value}，密码是${password.value}`)
        }
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    用户名：<input ref={cur => this.username = cur} type="text" name='username' />
                    密码：<input ref={cur => this.password = cur} type="password" name='password' />
                    <button>提交</button>
                </form>
            )
        }
    }

    ReactDOM.render(<Login />, document.getElementById('test'))
</script>
```

## 受控组件

### 代码演示

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>

<script type="text/babel">
    class Login extends React.Component {
        // 数据初始化
        state = {
            username: '',
            password: ''
        }

        // 保存用户名到状态中
        usernameEvent = (e) => {
            this.setState({ username: e.target.value })
        }
        // 保存密码到状态中
        passwordEvent = (e) => {
            this.setState({ password: e.target.value })
        }
        handleSubmit = (e) => {
            e.preventDefault()  // 阻止表单提交
            const { username, password } = this.state
            alert(`您输入的用户名是${username}，密码是${password}`)
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    用户名：<input onChange={this.usernameEvent} type="text" name='username' />
                    密码：<input onChange={this.passwordEvent} type="password" name='password' />
                    <button>提交</button>
                </form>
            )
        }
    }

    ReactDOM.render(<Login />, document.getElementById('test'))
</script>
```

## 高阶函数

### 概念

如果一个函数符合下面两个规范中的任何一个，那该函数就是高阶函数

+ 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数
+ 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数
    + 常见的高阶函数：`Promise`、`setTimeout`、`arr.map()`等等

### 柯里化

+ 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>

<script type="text/babel">
    class Login extends React.Component {
        // 数据初始化
        state = {
            username: '',
            password: ''
        }

        saveFormData = (dataType) => {
            return (e) => {
                this.setState({ [dataType]: e.target.value })
            }
        }
        handleSubmit = (e) => {
            e.preventDefault()  // 阻止表单提交
            const { username, password } = this.state
            alert(`您输入的用户名是${username}，密码是${password}`)
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    用户名：<input onChange={this.saveFormData('username')} type="text" name='username' />
                    密码：<input onChange={this.saveFormData('password')} type="password" name='password' />
                    <button>提交</button>
                </form>
            )
        }
    }

    ReactDOM.render(<Login />, document.getElementById('test'))
</script>
```