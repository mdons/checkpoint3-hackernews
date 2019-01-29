import React, { Component } from "react";
import Header from "./components/Header.js";
import PostListGroup from "./components/PostListGroup.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "topstories"
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PostListGroup sortType={this.state.sortType} />
      </div>
    );
  }
}

export default App;
