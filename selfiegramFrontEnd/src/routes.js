import React from 'react';
import { Route, IndexRoute } from 'react-router';
import User from './components/User'
import App from './components/App';
import Feed from './components/Feed';
import UserList from './components/UserList';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={User}/>
    <Route path="feed" component={Feed}/>
    <Route path="users" component={UserList}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
