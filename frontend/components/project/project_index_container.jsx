import { connect } from 'react-redux';

import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
// import { fetchCategories } from '../../actions/category_actions';
// import { fetchPledges } from '../../actions/pledge_actions';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects),
    // categories: Object.values(state.entities.categories),
    // pledges: state.entities.pledges || {},
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: projects => dispatch((projects) => fetchProjects(projects)),
    fetchUsers: users => dispatch((users) => fetchUsers(users)),
    // fetchCategories: categories => dispatch((categories) => fetchCategories(categories)),
    // fetchPledges: pledges => dispatch((pledges) => fetchPledges(pledges)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
