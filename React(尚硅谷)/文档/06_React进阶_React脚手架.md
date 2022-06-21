## 创建项目并启动

1. 全局安装：`npm i -g create-react-app`
2. 切换到要创建项目的文件夹，使用命令：`create-react-app hello-react`
3. 进入项目文件夹：`cd hello-react`
4. 启动项目：`npm start`

::warning:上述操作也可以使用`yarn`进行安装

## React脚手架项目结构

- `public`  --  静态资源文件夹
  - `favicon.icon`  --  网站页签图标
  - `index.html`  --  主页面
  - `logo192.png`  --  logo图
  - `logo512.png`  --  logo图
  - `manifest.json`  --  应用加壳的配置文件
  - `robots.txt`  --  爬虫协议文件

- `src`  --  源码文件夹
  - `App.css`  --  `App`组件的样式
  - `App.js`  --  `App`组件
  - `App.test.js`  --  用于给`App`做测试
  - `index.css`  --  样式
  - `index.js`  --  入口文件
  - `logo.svg`  --  `logo`图
  - `reportWedVitals.js`  --  页面性能分析文件（需要`web-vitals库`的支持）
  - `setupTests.js`  --  组件单元测试的文件（需要`jest-dom库`的支持）

## 组件化编码流程

1. 拆分组件：拆分界面，抽取组件
2. 实现静态组件：使用组件实现静态页面效果
3. 实现动态组件
   - 动态显示初始化数据
     - 数据类型
     - 数据名称
     - 保存在哪个组件
   - 交互（从绑定事件监听开始）

## todoList案例相关知识点

### 父子组件传参

1. `父子传参`：通过`props`传递
2. `子父传参`：通过`props`传递，要求父组件提前给子组件传递一个函数