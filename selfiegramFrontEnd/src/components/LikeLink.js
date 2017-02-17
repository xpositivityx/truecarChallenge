import React, {PropTypes} from 'react';
import '../styles/likeLink.css';

class LikeLink extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleLike = this.handleLike.bind(this);
  }

  likeStatus(){
    return this.props.liked == true ? 'unlike' : 'like';
  }

  handleLike(){
    if(this.props.liked == true)
      this.props.unlike(this.props.postId);
    else
      this.props.like(this.props.postId);
  }

  render() {
    return (
      <a className='follow-status' onClick={this.handleLike}>{this.likeStatus()}</a>
    );
  }
}

LikeLink.propTypes = {
  unlike: React.PropTypes.func,
  like: React.PropTypes.func,
  liked: React.PropTypes.bool,
  postId: React.PropTypes.integer
};

export default LikeLink;
