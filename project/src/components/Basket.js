import React, { Component } from 'react';
import '../styles/Flower.css';
class Basket extends Component{

	constructor(props){
	      super(props);
	      this.state = {flowers:[] ,total: 0} 
  }	
    render(){
    	  return(
           <div>
           		<div>
             		<div className="shop">
      				      {this.props.list.map((flower, index) => 
                 			 <div className="shop-raw">
                 			 <img src={flower.img} className="imgResponsive" />

                 			 <h>{flower.name}</h>
                 			 <h>{flower.price}</h>
                 			 <button onClick={()=>this.props.removeBasketItem({flower})}>Remove</button>


                 			 </div>
                 			)
                 		}
             			 <h className="total">Total:{this.props.list.map((flower, index) => parseInt(flower.price)).
    		            reduce((acc, cur) => acc + parseInt(cur,10),0)}</h>

    				  </div>
           		</div>

           </div>
        )
    }
}
export default Basket;