import React, {PropTypes} from 'react';
import LikeLink from './LikeLink';
import LikesBar from './LikesBar';
import '../styles/post.css';

class Post extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  renderLikeBar(post) {
    if(this.props.likePost !== undefined){
      return(
        <LikeLink
          liked={post.is_liked}
          like={this.props.likePost}
          unlike={this.props.unlikePost}
          postId={post.id}
        />
      );
    }
  }

  render() {
    const {post} = this.props
    return (
    	<div className='post'>
        <div>{post.author}</div>
        <img src={post.photo_url}/> 
        <div>{post.caption}</div>
        {this.renderLikeBar(post)}
        <LikesBar
          totalLikes={post.likes_count}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object,
  likePost: React.PropTypes.func,
  unlikePost: React.PropTypes.func
};

export default Post;
