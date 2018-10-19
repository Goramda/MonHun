import Mycard from './card/Mycard';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      "showtext":""
    }
  }
  onChange(e){
    this.setState({"showtext":e.target.value})
    console.log(e.target.value)
  }
  
  render() {
    let test = "Hello NaJa"
    return (
    <div>
      <input onChange={(e)=>this.onChange(e)}
        type="text"
        value={this.state.showtext}
      />
      <Mycard name={this.state.showtext}></Mycard>
      <Mycard name="God"/>
    </div>
    
    );
        }
}

export default App;
