import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
import { deleteProject } from '../../actions/project_actions';
import { fetchCategory } from '../../actions/category_actions';
import { fetchCategories } from '../../actions/category_actions';


const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.id];
  let creator = {};

  if (project) {
    creator = state.entities.users[project.creator_id];
  } else {
    project = {};
  };

  let currentUser = state.entities.users[state.session.id];
  let categories = state.entities.categories;
  return {
    project: project,
    creator: creator,
    currentUser: currentUser,
    currentUserId: state.session.id,
    catergoryId: project.category_id,
    categories: categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
