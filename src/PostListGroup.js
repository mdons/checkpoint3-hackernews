import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PostCard from "./PostCard.js";

class PostListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: this.props.sortType,
      posts: null
    };
  }

  getPosts = () => {
    fetch(
      "https://hacker-news.firebaseio.com/v0/" +
        this.state.sortType +
        ".json?print=pretty"
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ posts: data });
      });
  };

  componentDidMount = () => {
    this.getPosts();
  };

  render() {
    if (!this.state.posts) {
      return <h2>LOADING</h2>;
    }
    return (
      <ListGroup>
        {this.state.posts.map(postID => {
          return (
            <ListGroupItem key={postID}>
              <PostCard postID={postID} />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default PostListGroup;
