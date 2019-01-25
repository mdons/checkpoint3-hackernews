import React, { Component } from "react";
import Navbar from "./Navbar.js";
import PostListGroup from "./PostListGroup.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "beststories"
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <PostListGroup sortType={this.state.sortType} />
      </div>
    );
  }
}

export default App;
