import React, {PropTypes} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import Post from './Post';
import PostForm from './PostForm';

class User extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {
        handle: '',
        posts: []
      },
      formData: {
        caption: '',
        photo_url: '',
        likes_count: 0
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);

  }

  componentWillMount() {
    this.getUser(1);
  }

  getUser(id) {
    axios.get('http://localhost:3000/users/' + id)
      .then((data) => {
        this.setState({user: data.data});
      });
  }

  renderUser() {
    return this.state.user.handle;
  }

  updateCaption(e) {
    let newObj = Object.assign({}, this.state.formData, {caption: e.target.value});
    this.setState({formData: newObj});
  }

  updatePhoto(e) {
    let newObj = Object.assign({}, this.state.formData, {photo_url: e.target.value});
    this.setState({formData: newObj});
  }

  resetState() {
    return {
      caption: '',
      photo_url: ''
    }
  }

  handleSubmit(e) {
    if(this.state.formData.caption.length < 1 || this.state.formData.photo_url < 1) return;
    const user = this.state.user
    const updatedPosts = Object.assign({}, user, {posts: user.posts.concat(this.state.formData)});
    const self = this;

    axios.post('http://localhost:3000/users/1/posts', this.state.formData)
    .then((data) => {
      self.setState({
        formData: self.resetState(),
        user: updatedPosts
      });
    })
  }

  render() {
    const {user} = this.state;

    return (
      <div>
        <UserCard
          user={user}
        />
        <PostForm
          handleSubmit={this.handleSubmit}
          updateCaption={this.updateCaption}
          updatePhoto={this.updatePhoto}
          photo_url={this.state.photo_url}
          caption={this.state.caption}
        />
        <div className='post-feed'>
        <h2>Your Posts</h2>
        {
          user.posts.map((post) => {
            return(
              <Post
                key={post.id}
                post={post}
              />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default User;
