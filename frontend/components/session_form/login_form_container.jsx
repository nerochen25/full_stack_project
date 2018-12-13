import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    buttonText: 'Log me in!',
    errors: Object.values(state.errors.session),
    link: <Link to="/signup">Sign up</Link>,
    linkText: 'New to WeAreStarters?',
    header: 'Log in',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
