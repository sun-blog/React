## state

### 完整案例

```js
<script type="text/babel">
    // 创建类组件
    class Weather extends React.Component {
        constructor(props) {
            super(props);
            this.state = { isHot: true };
            // 解决changeWeather中this指向问题
            this.changeWeather = this.changeWeather.bind(this);
        }
        
        render() {
            // render中的this指向实例对象；在此处this指向weather
            // 解构
            const { isHot } = this.state;
            return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>;
        }

        changeWeather() {
            // changeWeather放在哪里？Weather的原型对象上，供实例使用
            // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用；类中的方法默认开启了局部的严格模式，所以changeWeather中放入this为undefined
            const isHot = this.state.isHot;
            this.setState({ isHot: !isHot });
        }
    }
	// 渲染类组件
	ReactDOM.render(<Weather />, document.getElementById('test'));
</script>
```

[修改`this`指向](https://www.cnblogs.com/ommph/p/14632022.html)

### 简写案例

```js
<script type="text/babel">
    // 创建类组件
    class Weather extends React.Component {
        state = { isHot: true };

        render() {
            const { isHot } = this.state;
            return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>;
        }

        // 自定义方法 -- 要用赋值语句的形式 + 箭头函数
        changeWeather = () => {
            const isHot = this.state.isHot;
            this.setState({ isHot: !isHot });
            };
    }
    
	// 渲染类组件
	ReactDOM.render(<Weather />, document.getElementById('test'));
</script>
```

### 理解

+ `state`是组件对象最重要的属性，值是对象（可以包含多个`key-value`的组合）
+ 组件被称为`状态机`，通过更新组件的`state`来更新对应的页面显示（重新渲染组件）

### 注意

+ 组件中`render`方法中的`this`为组件实例对象
+ 组件自定义的方法中`this`为`undefined`，如何解决？
  + 强制绑定`this`：通过函数对象的`bind()`
  + 箭头函数

+ 状态数据，不能直接修改或更新

## props

### 基本使用

```js
<script type="text/babel">
    // 创建组件
    class Person extends React.Component {
        render() {
            const { name, age, sex } = this.props;
            return (
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{sex}</li>
                </ul>
            )
        }
    }
    const p = { name: '半夏天南星', age: 26, sex: '男' }
    ReactDOM.render(<Person {...p} />, document.getElementById('test'))
</script>
```

### props添加限制

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script src="../js/prop-types.js"></script>

<script type="text/babel">
    // 创建组件
    class Person extends React.Component {
        // 对标签属性进行类型、必要性限制
        static propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            sex: PropTypes.string,
        }
        // 指定默认标签属性值
        static defaultProps = {
            sex: '男',
            age: 18
        }
        render() {
            const { name, age, sex } = this.props;
            return (
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{sex}</li>
                </ul>
            )
        }
    }

    const p = { name: '半夏天南星', age: 26, sex: '男' }
    ReactDOM.render(<Person {...p} />, document.getElementById('test'))
</script>
```

### 函数式组件使用props

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script src="../js/prop-types.js"></script>

<script type="text/babel">
    // 创建组件
    function Person(props) {
        const { name, age, sex } = this.props;
        return (
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{sex}</li>
            </ul>
        )
    }

    // 对标签属性进行类型、必要性限制
    Person.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.string,
    }
    // 指定默认标签属性值
    Person.defaultProps = {
        sex: '男',
        age: 18
    }

    const p = { name: '半夏天南星', age: 26, sex: '男' }
    ReactDOM.render(<Person {...p} />, document.getElementById('test'))
</script>
```

[扩展运算符复习](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## refs

### 字符串形式

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>

<script type="text/babel">
    class Demo extends React.Component {
        showData = () => {
            const { refInput } = this.refs
            alert(refInput.value)
        }
        render() {
            return (
                <div>
                    <input ref='refInput' type="text" placeholder='点击提示输入数据' />
                    <button onClick={this.showData}>点击</button>
                </div>
            )
        }
    }
    ReactDOM.render(<Demo />, document.getElementById('test'))
</script>
```

### 回调形式

```js
<script type="text/babel">
    class Demo extends React.Component {
        showData = () => {
            const { refInput } = this
            alert(refInput.value)
        }
        render() {
            return (
                <div>
                    <input ref={(cur) => { this.refInput = cur }} type="text" placeholder='点击提示输入数据' />
                    <button onClick={this.showData}>点击</button>
                </div>
            )
        }
    }
    ReactDOM.render(<Demo />, document.getElementById('test'))
</script>
```

### createRef

`React.createRef`调用后可以返回一个容器，该容器可以存储被`ref`所标识的节点，该容器式“专人专用”的

```js
<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>

<script type="text/babel">
    class Demo extends React.Component {
        myRef = React.createRef();
        showData = () => {
            alert(this.myRef.current.value);
        }
        render() {
            return (
                <div>
                    <input ref={this.myRef} type="text" placeholder='点击提示输入数据' />
                    <button onClick={this.showData}>点击</button>
                </div>
            )
        }
    }
    ReactDOM.render(<Demo />, document.getElementById('test'))
</script>
```

