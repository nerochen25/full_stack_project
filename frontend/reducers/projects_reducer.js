import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
}
from '../actions/project_actions';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECTS:
      newState = Object.assign({}, state, action.projects);
      return newState;
    case RECEIVE_PROJECT:
      newState = Object.assign({}, state, {
        [action.project.id]: action.project,
      });
      return newState;
    case REMOVE_PROJECT:
      newState = Object.assign({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectReducer;
