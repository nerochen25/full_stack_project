import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './project/project_index_container';
import CreateProjectFormContainer from './project/create_project_form_container';
import EditProjectFormContainer from './project/edit_project_form_container';
import ProjectShowContainer from './project/project_show_container';

import ProjectForm from './project/project_form';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer';

const App = () => (

  <div className='main-content'>
    <NavBar />

    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <ProtectedRoute path="/projects/create" component={CreateProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:id/edit" component={EditProjectFormContainer} />
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:id" component={ProjectShowContainer} />
      <Route path='/' component={GreetingContainer}/>
    </Switch>

    <Footer />
  </div>
);

export default App;
