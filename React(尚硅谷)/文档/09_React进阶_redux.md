## redux定义

1. `redux`是一个专门用于做`状态管理的js库`（不是`react`插件库）
2. 它可以用在`react`、`angular`、`vue`等项目中，但基本与`react`配合使用
3. 作用：集中式管理`react`应用中多个组件`共享`的状态

## redux使用场景

1. 某个组件的状态，需要让其他组件可以随时`拿到（共享）`
2. 一个组件需要改变另一个组件的状态（`通信`）
3. 总体原则：能不用就不用，除非开发时状态管理比较吃力时考虑使用

## redux工作流程

![](imgs/redux原理图.png)

案例（redux精简版）

1. 去除Count组件自身的状态
2. src下建立：
    - redux
        - store.js
        - count_reducer.js
3. store.js
    - 引入redux中的createStore函数，创建一个store
    - createStore调用时要传入一个为其服务的reducer
    - 记得暴露store对象
4. count_reducer.js
    - reducer的本质是一个函数，接收：preState，action，返回加工后的状态
    - reducer有两个作用：初始化状态，加工状态
    - reducer被第一次调用时，是store自动触发的，传递的preState是undefined
5. 在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
6. 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，则需要自己编写

## redux核心概念（三个）

## redux核心API

## react-redux

## 纯函数与高阶函数