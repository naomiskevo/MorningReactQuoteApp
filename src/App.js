import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button'
import './App.css';


class App extends Component {
  state = {
    isTrue: false,
    isToggled: false,
  }

  handleSubmit = () => {
    this.setState({
      isTrue : !this.state.isTrue
    })
  }

  handleToggle = () => {
    this.setState({
      isToggled : !this.state.isToggled
    })
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          {this.state.isToggled ? null : (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Party</h1>
          <Button handleClick={this.handleToggle} label="Toggle"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Button handleClick={this.handleSubmit} label={this.state.isTrue ? "Done" : "submit"}/>
        </header>
      </div>
    );
  }
}

export default App;


