import {
  RECEIVE_CURRENT_USER
}
from '../actions/session_actions';

import {
  RECEIVE_PROJECT, RECEIVE_PROJECTS
}
from '../actions/project_actions';

import {
  RECEIVE_USER, RECEIVE_USERS
}
from '../actions/user_actions';

// import { RECEIVE_PLEDGES } from '../actions/pledge_actions';



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        [action.user.id]: action.user
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users)
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, action.payload.users)
    default:
      return state;
  }
};

export default usersReducer;
