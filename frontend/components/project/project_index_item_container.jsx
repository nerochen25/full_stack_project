import { connect } from 'react-redux';

import ProjectIndexItem from './project_index_item';


const mapStateToProps = (state, ownProps) => {
  return {
    creators: state.entities.projects.users,
  };
};


export default connect(mapStateToProps)(ProjectIndexItem);
