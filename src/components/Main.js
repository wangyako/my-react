import React, {Component} from 'react';
import axios from 'axios';
import '../style/main.css';

export default class Main extends Component {
	constructor(){
		super();
		this.state={
			films:[]
		}
	}
	componentDidMount(){
		axios.get("/v4/api/film/now-playing?__t=1519870602757&page=1&count=5")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
	}
	render() {
		return (
			<div className="main">
				{
					this.state.films.map(function(item, index){
						return (
							<div className="mainto" key={item.name}>
								<img src={item.cover.origin} />
								<div className="cont">
									<div className="left">
										<h6>{item.name}</h6>
										<h5>{item.cinemaCount}家影院上映{item.watchCount}人购票</h5>
									</div>
									<div className="right">
										<h4>{item.grade}</h4>
									</div>
								</div>							
							</div>
						)
					})
				}
				<div className="more">
					<h3>更多热映电影</h3>
				</div>
			</div>
		)
	}
}