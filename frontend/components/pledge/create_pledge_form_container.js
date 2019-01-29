import { connect } from 'react-redux';
import CreatePledgeForm from './create_pledge_form';
import { createPledge } from '../../actions/pledge_actions';
import { fetchPledges } from '../../actions/pledge_actions';
  
const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: pledge => dispatch(createPledge(pledge)),
        fetchPledges: () => dispatch(fetchPledges())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePledgeForm);
  