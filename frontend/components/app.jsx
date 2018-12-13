import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProjectContainer from './project/project_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div className='main-content'>
    <header>
      <Link to='/'>
        <h1 className='we-are-starters-header'></h1>
      </Link>
      <ProjectContainer className='project-container'/>
    </header>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
