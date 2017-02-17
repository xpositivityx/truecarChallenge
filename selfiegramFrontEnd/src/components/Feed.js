import React from 'react';
import axios from 'axios';
import Post from './Post';
import '../styles/feed.css';

class Feed extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: []
    };
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get('http://localhost:3000/users/1/feed')
      .then((data) => {
        this.setState({posts: data.data});
      });
  }

  likePost(postId) {
    const self = this;
    
    axios.post('http://localhost:3000/users/1/posts/' + postId + '/likes')
    .then((data) => {

      if(data.status !== 200){
        alert('Something went wrong!');
        return;
      }

      let updatedPosts = this.state.posts.map((post)=>{
        if(post.id == postId){
          post.is_liked = true;
          post.likes_count += 1;
        }
        return post;
      });


      self.setState({posts: updatedPosts});
    });
  }

  unlikePost(postId) {
    const self = this;
    
    axios.delete('http://localhost:3000/users/1/posts/' + postId + '/likes')
    .then((data) => {
      
      if(data.status !== 200){
        alert('Something went wrong!');
        return;
      }

      let updatedPosts = this.state.posts.map((post)=>{
        if(post.id == postId){
          post.is_liked = false;
          post.likes_count -= 1;
        }
        return post;
      });

      self.setState({posts: updatedPosts});
    });
  }

  render() {
    const {posts} = this.state;

    return (
      <div>
      {
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              likePost={this.likePost}
              unlikePost={this.unlikePost}
            />
          );
        })
      }
      </div>
    );
  }
}

export default Feed;
