import { connect } from 'react-redux';

import { fetchCategory } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
// import { fetchPledges } from '../../actions/pledge_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.entities.categories[ownProps.match.params.id],
    users: state.entities.users,
    projects: state.entities.projects,
    // pledges: state.entities.pledges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchProjects: () => dispatch(fetchProjects()),
    // fetchPledges: () => dispatch(fetchPledges)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
