import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';   //组件，组件名必须大写
import registerServiceWorker from './registerServiceWorker';    //提高访问速度的代码


//JSX渲染dom
ReactDOM.render(<App />, document.getElementById('root'));  //root在public里面的index.html里的第28行。表示在id为root的div里面显示我们写的代码
registerServiceWorker();
