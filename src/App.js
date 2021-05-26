import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './components/pageFormat.css';

export default class App extends React.Component {
  constructor(props){
            
    super(props)
    // this is the initial state
    this.state = {
      color: "",
      colorOfBox1: "yellow",
      colorOfBox2: "transparent",
      colorOfBox3: "transparent",
      colorOfBox4: "transparent"

    }
  }
  changeColor= (newcolor ) => {
    this.setState({color: newcolor}) 
  }

  changeColorOfBox = (id) => {
    if( id == "board-1"){
    this.setState({colorOfBox1: this.state.color}) 
    } else if (id == "board-2"){
      this.setState({colorOfBox2: this.state.color})
    } else if (id == "board-3"){
      this.setState({colorOfBox3: this.state.color})
    } else if (id == "board-4"){
      this.setState({colorOfBox4: this.state.color})
    }
  }

  
  render(){
    return (
      <div>
 
          <Home className = "page1 rel"  message =     "Hello, My name is Anthony" color = {this.state.colorOfBox1}>  </Home>
          <AboutMe className = "" message = 
      </div>
    );
  }
}