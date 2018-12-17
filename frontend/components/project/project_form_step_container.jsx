import { connect } from 'react-redux';
import ProjectFormStep1 from './project_form_step1';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    post: {
      title: '',
      description: '',
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
    action: project => dispatch(createProject(project)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormStep1);
