import React, {PropTypes} from 'react';

class FollowedLink extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  followStatus(){
    return this.props.followed ? 'unfollow' : 'follow';
  }

  handleFollow(){
    if(this.props.followed)
      this.props.unfollow();
    else
      this.props.follow();
  }

  render() {
    return (
      <a className='follow-status' onClick={this.handleFollow}>{this.followStatus}</a>
    );
  }
}

FollowedLink.propTypes = {
  unfollow: React.PropTypes.func,
  follow: React.PropTypes.func,
  followed: React.PropTypes.boolean
};

export default FollowedLink;
