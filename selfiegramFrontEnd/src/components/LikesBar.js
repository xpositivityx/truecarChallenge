import React, {PropTypes} from 'react';

class LikesBar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <span>Likes:</span>
        <span>{this.props.totalLikes}</span>
      </div>
    );
  }
}

LikesBar.propTypes = {
  post: React.PropTypes.string
};

export default LikesBar;
