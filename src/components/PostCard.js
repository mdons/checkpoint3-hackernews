import React, { Component } from "react";
import {
  Spinner,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from "reactstrap";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.postID = props.postID;
    this.state = {
      post: null
    };
  }

  getPost = () => {
    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.postID +
        ".json?print=pretty"
    )
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({ post: data });
      });
  };

  componentDidMount = () => {
    this.getPost();
  };

  render() {
    if (!this.state.post) {
      return <Spinner color="primary" />;
    }
    return (
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardBody>
          <CardTitle>
            <h3>{this.state.post.title}</h3>
          </CardTitle>
          <CardLink href={this.state.post.url}>{this.state.post.url}</CardLink>
          <CardText>
            <div dangerouslySetInnerHTML={{ __html: this.state.post.text }} />
          </CardText>
          <CardSubtitle>
            {this.state.post.score} points by {this.state.post.by} on{" "}
            {new Date(this.state.post.time * 1000).toLocaleString()}
          </CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default PostCard;
