import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
// import { fetchCategories } from '../../actions/category_actions';
// import { addFlashMessage } from '../../actions/message_actions';
// import { fetchRewards } from '../../actions/reward_actions';
// import { fetchPledges } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.project.id];
  let creator = {};
  // let category = {};

  if (project) {
    creator = state.entities.users[project.creator_id];
    // category = state.entities.categories[project.category_id];
  } else {
    project = {};
  };

  let currentUser = stat.entities.users[state.session.id];

  return {
    project,
    creator,
    // categories,
    currentUser,
    // pledges: state.entities.pledges,
    // rewards: state.entities.rewards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    // fetchCategories: () => dispatch(fetchCategories()),
    // fetchPledges: () => dispatch(fetchPledges()),
    // fetchRewards: () => dispatch(fetchRewards()),
    // addFlashMessage: () => dispatch(addFlashMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
