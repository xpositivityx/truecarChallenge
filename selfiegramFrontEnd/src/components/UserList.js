import React, {PropTypes} from 'react';
import axios from 'axios';
import UserCard from './UserCard'

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: []
    };
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get('http://localhost:3000/users/')
      .then((data) => {
        this.setState({users: data.data});
      });
  }

  followUser(targetId) {
    const self = this;
    
    axios.post('http://localhost:3000/users/1/follows',{
      follow_target: targetId
    })
    .then((data) => {
      let updatedUsers = this.state.users.map((user)=>{
        if(user.id == targetId){
          user.is_followed = true;
          user.follower_count += 1;
        }
        return user;
      });

      self.setState({users: updatedUsers});
    });
  }

  unfollowUser(targetId) {
    const self = this;
    
    axios.delete('http://localhost:3000/users/1/follows/' + targetId)
    .then((data) => {
      let updatedUsers = this.state.users.map((user)=>{
        if(user.id == targetId){
          user.is_followed = false;
          user.follower_count -= 1;
        }
        return user;
      });

      self.setState({users: updatedUsers});
    });
  }

  render() {
    const {users} = this.state;

    return (
      <div>
      {
        users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              follow={this.followUser}
              unfollow={this.unfollowUser}
            />
          )
        })
      }
      </div>
    )
  }
}

export default UserList;
