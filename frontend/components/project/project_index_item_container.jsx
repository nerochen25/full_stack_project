import { connect } from 'react-redux';

import ProjectIndexItem from './project_index_item';


const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.project.id];
  return {
    creator: state.entities.users[project.creator_id],
    // category: state.entities.categories[project.category_id],
  }
}

export default connect(mapStateToProps)(ProjectIndexItem);
