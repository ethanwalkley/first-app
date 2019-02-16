import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubNubReact from 'pubnub-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: 'npm -g create-react-app',
      subscribeKey: 'npm -g create-react-app'
    }
    );
    this.pubnub.init(this);
    this.state = {
      headerText: "Hello world!"
    }
  }


  render() {
    console.log("hello World");
    return (
      <div className="App">
        <img src="../images/Group_2.jpg" ></img>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.headerText}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is so cool!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
