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

  setSortType = string => {
    this.setState({
      sortType: string
    });
  };

  render() {
    return (
      <div className="App">
        <Header setSortType={this.setSortType} />
        <PostListGroup sortType={this.state.sortType} />
      </div>
    );
  }
}

export default App;
