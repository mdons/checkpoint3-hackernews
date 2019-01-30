import React, { Component } from "react";
import { Spinner, ListGroup, ListGroupItem } from "reactstrap";
import PostCard from "./PostCard.js";
import "../style/style.css";

class PostListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: props.sortType,
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
        // console.log(response);
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({ posts: data });
      });
  };

  componentWillReceiveProps = props => {
    this.setState({
      sortType: props.sortType,
      posts: null
    });
  };

  componentDidMount = () => {
    this.getPosts();
  };

  render() {
    if (!this.state.posts) {
      this.getPosts();
      return (
        <div className="Loading">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
        </div>
      );
    }
    return (
      <div className="PostListGroup">
        <ListGroup>
          {this.state.posts.map(postID => {
            return (
              <ListGroupItem key={postID} style={{ backgroundColor: "#000" }}>
                <PostCard postID={postID} />
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default PostListGroup;
