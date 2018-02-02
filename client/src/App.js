import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import "./App.css";

class App extends Component {
  renderPosts() {
    return this.props.data.getAllPosts.map(
      ({ _id, title, content, imageUrl }) => {
        return (
          <div key={_id}>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={imageUrl} alt={title} />
          </div>
        );
      }
    );
  }

  render() {
    if (this.props.data.loading) {
      return <div>loading...</div>;
    }
    console.log(this.props.data);
    return <div className="App">{this.renderPosts()}</div>;
  }
}

const query = gql`
  {
    getAllPosts {
      _id
      title
      content
      imageUrl
    }
  }
`;

export default graphql(query)(App);
