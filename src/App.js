import React, { Component } from 'react';  //结构赋值，固定写法，引入必要的组件
//import logo from './logo.svg';   //引入本地图片
import './App.css';    //引入css
import "./style/iconfont/iconfont.css";
import Header from './components/Header';
import Figure from './components/Figure';
import Main from './components/Main';
import Footer from './components/Footer';

//创造组件

class App extends Component {
	constructor(){
	super();
	this.state={
		show:false
	}
	this.sidebar=this.sidebar.bind(this)
}
sidebar(){
	console.log("123")
	this.setState({
		show:!this.state.show 
	})
		console.log(this.state.show)
	
}
  render() {
  	var ceb=<ul className="ulo"><li><span>首页</span><i className="iconfont icon-gengduo"></i></li><li><span>影片</span><i className="iconfont icon-gengduo"></i></li><li><span>影院</span><i className="iconfont icon-gengduo"></i></li><li><span>商场</span><i className="iconfont icon-gengduo"></i></li><li><span>我的</span><i className="iconfont icon-gengduo"></i></li><li><span>卖座卡</span><i className="iconfont icon-gengduo"></i></li></ul>
  	if(!this.state.show){
  		ceb=null;
  	}
    return (
      <div className="App">
				<Header className="good" tip={this.sidebar}/> 
				<div className="btn">
					<Figure />
					<Main />
					<Footer />
					{ceb}
				</div>
				
      </div>
    )
  }
}

export default App;
