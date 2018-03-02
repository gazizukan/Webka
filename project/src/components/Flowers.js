import React, { Component } from 'react';
import '../styles/Flower.css';
import {Basket} from './Basket';
class Flowers extends Component{

	 constructor(props){
	      super(props);
	      
  }	
    render(){
    	console.log(this.props.list);
    	console.log("asd");
        return(
           <div >
           		<div className="shop">
				    {this.props.list.map((flower, index) => 
           			 <div className="shop-raw">
           			 <img src={flower.img} className="imgResponsive" />

           			 <h>{flower.name}</h>
           			 <h>{flower.price}</h>
           			 <button onClick={()=>this.props.addToBasket({flower})}>Add</button>
           			 </div>
           		)
           	}
  				</div>
           		</div>

           
        )
    }
}
export default Flowers;