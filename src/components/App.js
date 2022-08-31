import Header from "./Bootstraps/Header";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header dark={true} headerClassName="justify-content-center">Bill-Splitter</Header>
      </div>
    );
  }
}
export default App;
