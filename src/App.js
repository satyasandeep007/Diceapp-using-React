import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  state = {
    number : 1,
    color: "rgb(1,0,0)"
  }

  buttonClicked = () => {
   this.setState({
     number :  Math.floor((Math.random()*6)+1),
     color: `rgb(${ Math.floor((Math.random()*256))},${ Math.floor((Math.random()*256))},${ Math.floor((Math.random()*256))})`
        
   })
  }
  
  render() {
    return (
      <div  style={{backgroundColor: this.state.color}} className="main">
        <img id="first" src={require(`./diceimages/dice${this.state.number}.png`)} alt={this.state.number} ></img>
        <button id="button" onClick={this.buttonClicked}>Click here</button>
      </div>
    )
  }
}