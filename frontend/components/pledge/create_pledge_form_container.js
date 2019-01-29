import { connect } from 'react-redux';
import PledgeForm from './pledge_form';
import { createPledge } from '../../actions/pledge_actions';
import { fetchPledges } from '../../actions/pledge_actions';
  
const mapStateToProps = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.id];
    const projectId = project.id;
    const creator = state.entities.users[project.creator_id];
    return {
        pledge: {
            amount: '',
            project_id: projectId,
            supporter_id: state.session.id
        },
        errors: state.errors.pledge,
        project,
        creator,
        currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: pledge => dispatch(createPledge(pledge)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PledgeForm);
  