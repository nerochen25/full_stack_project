import { connect } from 'react-redux';
import ProjectShow from './project_show';
import {  } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.project.id];
  return {
    project: project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
