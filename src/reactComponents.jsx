
import React from 'react';
// import { createClass } from 'react';  // eslint-disable-line no-unused-vars

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}


class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>{comment.text}</Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

class CommentForm extends React.Component {
  render() {
    return (
      <div className="commentForm">
        Hello, I am commentForm
      </div>
    );
  }
}

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}



class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

// need to put it after class is declared
export { CommentBox, HelloWorld };
