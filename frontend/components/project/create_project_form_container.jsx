import { connet } from 'react-redux';

import ProjectForm from './project_form';
import { creatProject } from '../../actions/project_actions';
// import { fetchCategories } from '../../actions/category_actions';


const mapStateToProps = state => {
  return {
    project: {
      title: '',
      description: '',
      creator_id: state.session.id,
      category_id: '',
      funding_goal: '',
      due_date: '',
    },
    // categories: Object.values(state.entities.categories),
    addRewardButton: 'Add rewards',
    editRewardButton: null,
    deleteButton: null,
    errors: state.errors.project,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: project => dispatch(creatProject(project)),
    fetchCategories: () => dispatch(fetchCategories()),
    formType: 'Create Project',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
