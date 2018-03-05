import React, {Component} from 'react';
import "../style/Header.css";


export default class Header extends Component {
	render() {
		return (
			<div className="top">
				<div className="left" onClick={this.props.tip}>
					<div className="top1">
						<i className="iconfont more">&#xe609;</i>
					</div>
					<span className="logo">卖座电影</span>
				</div>
				<div className="right">
					
					<e className="iconfont personal">&#xe8e9;</e>
					<div className="right1">
						<span className="address">北京</span>
						<i className="iconfont jian">&#xe62d;</i>
					</div>
				</div>
			</div>
		)
	}
}