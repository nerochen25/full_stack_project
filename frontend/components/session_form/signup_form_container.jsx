import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    buttonText: 'Create account',
    errors: Object.values(state.errors.session),
    link: <Link to="/login">Log in</Link>,
    linkText: 'Have an account?',
    header: 'Sign up',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
