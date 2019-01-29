import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './projects_reducer';
import categories from './categories_reducer';
import pledges from './pledges_reducer';


export default combineReducers({
  users,
  projects,
  categories,
  pledges,
});
