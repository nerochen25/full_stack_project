import React from 'react';
import ProjectForm from './project_form';
import { connect } from 'react-redux';
import { fetchProject, updateProject, deleteProject } from '../../actions/project_actions';
// import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.project.id];
  return {
    project: project || {},
    // categories: Object.values(state.entities.categories),
    addRewardButton: 'Add new rewards',
    editRewardButton: 'Edit existing rewards',
    deleteButton: 'Delete this project',
    currentUserId: state.session.id,
    // errors: state.errors.pledge,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: project => dispatch(updateProject(project)),
    fetchProject: id => dispatch(fetchProject(id)),
    deleteProject: id => dispatch(deleteProject(id)),
    // fetchCategories: () => dispatch(fetchCategories()),
  };
};


class EditProjectForm extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.id);
    // this.props.fetchCategories();
  }

  render(){
    // const { action, fetchCategories, buttonText, project, categories, deleteProject, currentUserId, addRewardButton, editRewardButton, deleteButton } = this.props;
    const { action, project, deleteProject, currentUserId, addRewardButton, editRewardButton, deleteButton } = this.props;

    return(
      <div>
        <ProjectForm
          action={action}
          project={project}
          deleteProject={deleteProject}
          currentUserId={currentUserId}
          addRewardButton={addRewardButton}
          editRewardButton={editRewardButton}
          deleteButton={deleteButton}
        />
      </div>
    )
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
