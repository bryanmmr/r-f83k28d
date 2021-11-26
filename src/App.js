import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {number: 0}
  handleClick = () =>{
    this.setState({number : this.state.number + 1})
  }
  render() {
    return (
      <div>
          <span className="value">{this.state.number}</span>
          <button id="inc" onClick={this.handleClick}>Incrementa</button>
      </div>    
    );
  }
}

export default App;
