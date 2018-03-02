import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Flowers from './components/Flowers';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Basket from './components/Basket';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {flowers:[
        {
            id:1,name:'gaziz',price: '1200', img: "http://deifiori.kz/upload/images/big/64894_207905_10.jpg"
        },
        {
            id:2,name:'azamat',price: '1500', img: "http://deifiori.kz/upload/images/big/98134_408999_10.jpg"
        },
        {
           id:3,name:'dara',price:'1300', img: "http://deifiori.kz/upload/images/big/5926_296762_10.jpg"
        },
        {
           id:4,name:'buket',price:'1400', img: "http://deifiori.kz/upload/images/big/92146_647842_10.jpg"
        }
      ],

      displayedFlowers:[
        {
            id:1,name:'gaziz',price: '1200', img: "http://deifiori.kz/upload/images/big/64894_207905_10.jpg"
        },
        {
            id:2,name:'azamat',price: '1500', img: "http://deifiori.kz/upload/images/big/98134_408999_10.jpg"
        },
        {
           id:3,name:'dara',price:'1300', img: "http://deifiori.kz/upload/images/big/5926_296762_10.jpg"
        },
        {
           id:4,name:'buket',price:'1400', img: "http://deifiori.kz/upload/images/big/92146_647842_10.jpg"
        }
      ],
   
        basketFlowers:[
        {
            id:1,name:'gaziz',price: '1200', img: "http://deifiori.kz/upload/images/big/64894_207905_10.jpg"
        },
        {
           id:3,name:'dara',price:'1300', img: "http://deifiori.kz/upload/images/big/5926_296762_10.jpg"
        }
        ],
        displayedbasketFlowers:[
        {
            id:1,name:'gaziz',price: '1200', img: "http://deifiori.kz/upload/images/big/64894_207905_10.jpg"
        },
        {
           id:3,name:'dara',price:'1300', img: "http://deifiori.kz/upload/images/big/5926_296762_10.jpg"
        }
      ]
       
      }
      this.addToBasket = this.addToBasket.bind(this);
      this.removeBasketItem = this.removeBasketItem.bind(this);
      this.searchList = this.searchList.bind(this);
  }


  addToBasket(flower){

    this.setState({
      basketFlowers : [...this.state.basketFlowers, flower.flower],
      displayedbasketFlowers: [...this.state.displayedbasketFlowers, flower.flower]
    })

    console.log(flower.flower);
    console.log(this.state.basketFlowers);
    alert(flower.flower.name + ' added');
  }


  removeBasketItem(flower){
    console.log(flower.flower);

    var array = this.state.basketFlowers;
    var index = array.indexOf(flower.flower);
    array.splice(index, 1);
    this.setState({
      basketFlowers: array,
       displayedbasketFlowers: array
    });

    alert(flower.flower.name + ' removed');

  }

  searchList(inputText){


    var searchQuery = inputText.toLowerCase();


    var displayedFlowersList= this.state.flowers.filter(function(el) {
        var searchValue2 = el.name.toLowerCase();
        return searchValue2.indexOf(searchQuery) !== -1;
    });

    this.setState({
        displayedFlowers: displayedFlowersList
    });

    var displayedbasketFlowersList= this.state.basketFlowers.filter(function(el) {
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
        displayedbasketFlowers: displayedbasketFlowersList
    });

      //alert(inputText);
  }
  render() {
    return (
      <div className="header">
        <Header searchList={this.searchList}/>
        <div className="header_menu">
          <Router>
            <div>
              <ul>

              <li><Link to="/about">About</Link></li>
              <li><Link to="/catalog">Flowers</Link></li>
              <li><Link to="/basket">Basket</Link></li>
              <li><Link to="/login">Login</Link></li>
              </ul>

                <Route exact path="/about" component={About} />
                <Route exact path="/catalog" render={()=><Flowers list={this.state.displayedFlowers} addToBasket={this.addToBasket}/>}/>
                <Route exact path="/basket" render={()=><Basket list={this.state.displayedbasketFlowers} removeBasketItem={this.removeBasketItem}/>}/>
                <Route exact path="/login" component={Login} />
            </div>
          </Router>
        </div>  
      </div>
    );
  }
}

export default App;
