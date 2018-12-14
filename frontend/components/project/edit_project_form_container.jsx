import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.project.id];
  return {
    project: project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: project => dispatch(updateProject(project)),
    typeForm: 'Update Project',
  };
};


class EditProjectForm extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.action(this.props.project);
  }

  render(){
    return(
      <div>
        Edit Project Form
      </div>
    )
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
