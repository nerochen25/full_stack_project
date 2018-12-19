import {
  RECEIVE_PROJECTS, RECEIVE_PROJECT
}
from '../actions/project_actions';
import {
  RECEIVE_CATEGORY, RECEIVE_CATEGORIES
}
from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        [action.category.id]: action.category,
      });
    case RECEIVE_CATEGORIES:
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, action.categories);
    default:
      return state;
  }
};

export default categoriesReducer;
