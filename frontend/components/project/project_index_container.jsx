import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';


const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.entities.projects),
    users: state.entities.users,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUsers: () => dispatch(fetchUsers()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
