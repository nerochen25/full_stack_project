import { connect } from 'react-redux';
import React from 'react';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
// import { fetchCategories } from '../../actions/category_actions';
// import { fetchPledges } from '../../actions/pledge_actions';

const mapStateToProps = state => {
  let projects = Object.values(state.entities.projects);
  return {
    projects: projects,
    // categories: Object.values(state.entities.categories),
    // pledges: state.entities.pledges || {},
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUsers: () => dispatch(fetchUsers()),
    // fetchCategories: () => dispatch(fetchCategories()),
    // fetchPledges: () => dispatch(fetchPledges()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
