// 第一次使用React18，控制台会有警告；处理方式  https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// createRoot(document.getElementById("root")).render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './01-base/012-setState';

ReactDOM.render(
    // 开启严格模式
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>
    document.getElementById('root')
);
