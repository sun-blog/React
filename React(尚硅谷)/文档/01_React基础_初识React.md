## 简介

### 官网

[中文官网](https://react.docschina.org/)

[英文官网](https://reactjs.org/)

### 特点

+ 声明式编码
+ 组件化编码
+ React Native 编写原生应用
+ 高效（优秀的Diffing算法）

### react高效的原因

+ 使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。
+ DOM Diffing算法, 最小化页面重绘。

## 基本使用

### 相关库

+ react.js：React核心库
+ react-dom.js：提供操作DOM的react扩展库
+ babel.min.js：解析JSX语法代码转为JS代码的库

### 创建虚拟DOM的两种方式                     

+ 纯JS方式(一般不用)

```js
<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
</body>

<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<script type="text/javascript">
    // 创建虚拟DOM
    const VDOM = React.createElement('h1', { id: 'title' }, 'Hello，React');
	// 渲染虚拟DOM到页面
	ReactDOM.render(VDOM, document.getElementById('test'));
</script>
```

+ JSX方式

```js
<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
</body>

<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>
<script type="text/babel">
    // 创建虚拟DOM
    const VDOM = (
        <h1 id='title'>
        <span>Hello，React</span>
        </h1>
    );
	// 渲染虚拟DOM到页面
	ReactDOM.render(VDOM, document.getElementById('test'));
</script>
```

### JSX语法规则

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>helloReact</title>
        <style>
            .title{
                width: 500px;
                background: pink;
            }
        </style>
    </head>
    <body>
        <!-- 准备好一个容器 -->
        <div id="test"></div>
    </body>

    <!-- 引入react核心库 -->
    <script src="../js/react.development.js"></script>
    <!-- 引入react-dom，用于支持react操作DOM -->
    <script src="../js/react-dom.development.js"></script>
    <!-- 引入babel，用于将jsx转为js -->
    <script src="../js/babel.min.js"></script>

    <script type="text/babel">
        const myID = 'jAVaScript';
        const myData = 'HeLlO，react';
        // 创建虚拟DOM
        const VDOM = (
            <h1 className='title' id={myID.toLocaleUpperCase()}>
                <span>{myData.toLocaleLowerCase()}</span>
            </h1>
        );
        // 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById('test'));
    </script>
</html>
```

+ 定义`虚拟DOM`时，不要写`引号`
+ 标签中混入`JS`表达式时要用`{}`
+ 样式的类名指定不要用`class`，要用`className`
+ 内联样式，要用`style={{key:value}}`的形式去写
+ 只有一个根标签
+ 标签必须闭合
+ 标签首字母
  + 若小写字母开头，则将该标签转为`html`中同名元素，若`html`中无该标签对应的同名元素，则报错
  + 若大写字母开头，`react`就去渲染对应的组件，若组件没有定义，则报错

### 函数式组件

```js
<script type="text/babel">
    function MyComponent() {
    	return <h1>函数式组件</h1>;
	}
	// 渲染虚拟DOM到页面
	ReactDOM.render(<MyComponent/>, document.getElementById('test'));
</script>
```

问题：执行了`ReactDOM.render(<MyComponent/>,document.getElementById('test'))`之后，发生了什么？

1. `React`解析组件标签，找到了`MyComponent`组件
2. 发现组件是使用函数定义的，随后调用该函数，将返回的`虚拟DOM`转为`真实DOM`，随后呈现在页面中

### 类式组件

```js
<script type="text/babel">
    // 创建类组件
    class MyComponent extends React.Component {
        render() {
            return <h1>类式组件</h1>;
        }
    }
	// 渲染类组件
	ReactDOM.render(<MyComponent />, document.getElementById('test'));
</script>
```

问题：执行了`ReactDOM.render(<MyComponent/>,document.getElementById('test'))`之后，发生了什么？

1. `React`解析组件标签，找到了`MyComponent`组件
2. 发现组件是使用类定义的，随后`new`出来该类的实例，并通过该实例调用到原型上的`render`方法
3. 将`render`返回的`虚拟DOM`转为`真实DOM`，随后呈现在页面中
