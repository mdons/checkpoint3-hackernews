import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postID: this.props.postID,
      post: null
    };
  }

  getPost = () => {
    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.state.postID +
        ".json?print=pretty"
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ post: data });
      });
  };

  componentDidMount = () => {
    this.getPost();
  };

  render() {
    if (!this.state.post) {
      return <h3>LOADING</h3>;
    }
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.state.post.title}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default PostCard;
