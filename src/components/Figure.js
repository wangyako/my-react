import React, {Component} from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
import '../style/figure.css'

export default class figure extends Component {
	constructor(){
		super();
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		axios.get("/v4/api/billboard/home?__t=1519825184858")
		.then((res)=>{
			console.log(res);
			this.setState({
				list:res.data.data.billboards
			})
			console.log(res.data.data.billboards)
		})
		
	}
	render() {
		return (
			<div className="figure">
				<Carousel autoplay>
				    	{
				    		this.state.list.map(function(item,index){
				    			return(
				    				 <div key={item.name}>
				    				 	<img src={item.imageUrl}/>
				    				 </div>
				    			)
				    		})
				    	}
				</Carousel>
			</div>
		)
	}
}