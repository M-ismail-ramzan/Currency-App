import React, { Component } from 'react';
import Main from "./Main/Main";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <Main />
          </div>
        </div>
      </div>
    )
  }
}
