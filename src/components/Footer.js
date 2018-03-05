import React, {Component} from 'react';
import axios from 'axios';
import '../style/footer.css';

export default class Footer extends Component {
	constructor(){
		super();
		this.state={
			films:[]
		}
	}
	componentDidMount(){
		axios.get("/v4/api/film/coming-soon?__t=1519889318710&page=1&count=3")
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
				<div className="soon">
					<h5>即将上映</h5>
				</div>
				{
					this.state.films.map(function(item, index){
						return (
							<div className="mainto" key={item.name}>
								<img src={item.cover.origin} />
								<div className="cont">
									<div className="left">
										<h6>{item.name}</h6>
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
					<h3>更多即将上映电影</h3>
				</div>
			</div>
		)
	}
}