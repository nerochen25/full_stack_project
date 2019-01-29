import { connect } from 'react-redux';
import CreatePledgeForm from './create_pledge_form';
  
const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePledgeForm);
  