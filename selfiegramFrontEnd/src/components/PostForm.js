import React, {PropTypes} from 'react';
import '../styles/postForm.css';
class PostForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    	<div className='form'>
        <h2>Create a post!</h2>
        <div className='row'>
          <span>Caption:</span>
          <input onChange={this.props.updateCaption} value={this.props.caption}/>
        </div>
        <div className='row'>
          <span>Photo URL:</span>
          <input onChange={this.props.updatePhoto} value={this.props.photo_url}/>
        </div>
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    );
  }
}

PostForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  photo_url: React.PropTypes.string,
  caption: React.PropTypes.string,
  updateCaption: React.PropTypes.func,
  updatePhoto: React.PropTypes.func
};

export default PostForm;
