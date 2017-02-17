import React, {PropTypes} from 'react';
import '../styles/userCard.css';

class UserCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.renderFollowButton = this.renderFollowButton.bind(this);
  }

  followStatus() {
    return this.props.user.is_followed ? 'unfollow' : 'follow';
  }

  renderFollowButton() {
    if(this.props.follow)
      return (<a onClick={this.handleClick}>{this.followStatus()}</a>);
  }

  handleClick() {
    console.log(this.props.user.is_followed);
    if(this.props.user.is_followed == true)
      this.props.unfollow(this.props.user.id);
    else
      this.props.follow(this.props.user.id);
  }

  render() {
    const {user} = this.props;
    return (
    	<div className='user-card'>
        <div className='user-name'>{user.handle}</div>
        <div className='user-img'>
          <img src={user.photo} />
        </div>
        <div className='follower-bar'>
          <div>
            <span className='label'>Followers:</span><span className='count'>{user.follower_count}</span>
          </div>
          <div>
            <span className='label'>Following:</span><span className='count'>{user.following_count}</span>
          </div>
        </div>
        <div className='follow-btn'>
          {this.renderFollowButton()}
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: React.PropTypes.object,
  follow: React.PropTypes.func,
  unfollow: React.PropTypes.func
};

export default UserCard;
