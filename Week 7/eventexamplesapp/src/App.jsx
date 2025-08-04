// src/App.jsx
import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Binding methods
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  handleIncrease() {
    this.increment();
    this.sayHello();
  }

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome(msg) {
    alert(msg);
  }

  handleClick(e) {
    e.preventDefault(); // Synthetic event
    alert("I was clicked!");
  }

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🎯 React Event Handling Lab</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>{' '}
        <button onClick={this.handleDecrease}>Decrease</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Event Handling!")}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleClick}>OnPress</button>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
