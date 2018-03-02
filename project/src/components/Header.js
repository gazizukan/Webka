import React, { Component } from 'react';
import '../styles/Header.css';
import logos from '../img/logo.jpeg';
import SearchBar from './SearchBar';
class Header extends Component{


     constructor(props){
        super(props);
        this.alert2 = this.alert2.bind(this);
    }


    alert2(inputText){
        console.log(inputText);
        this.props.searchList(inputText);
    }
    render(){
        console.log(this.props.searchList);
        return(
           <div className="logo">
                <div className="search_bar">
                    <SearchBar searchList={this.alert2}/>
                </div>
           </div>
        );
    }
}
export default Header;