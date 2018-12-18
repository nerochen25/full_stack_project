import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
import { deleteProject } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.id];
  let creator = {};

  if (project) {
    creator = state.entities.users[project.creator_id];
  } else {
    project = {};
  };

  let currentUser = state.entities.users[state.session.id];

  return {
    project: project,
    creator: creator,
    currentUser: currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
