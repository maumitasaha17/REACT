import React, { Component } from "react";

class Post extends Component {
  render() {
    const { ps: post, update } = this.props;
    return (
      <div>
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.body}</p>
          <button onClick={update} class="card-link">
            Update
          </button>
          <button onClick={this.props.delete} class="card-link">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
