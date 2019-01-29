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
import NavBarContainer from './nav_bar/nav_bar_container';

import Footer from './footer/footer';
import CategoryBarContainer from './category/category_bar_container';
import CategoryShowContainer from './category/category_show_container';

import CreatePledgeFormContainer from './pledge/create_pledge_form_container';


const App = () => (

  <div className='main-content'>
    <NavBarContainer />
    <CategoryBarContainer />

    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />

      <ProtectedRoute path="/projects/create" component={CreateProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:id/edit" component={EditProjectFormContainer} />
      <Route exact path="/categories/:id" component={CategoryShowContainer} />
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:id" component={ProjectShowContainer} />
      <ProtectedRoute exact path="/projects/:id/pledge" component={CreatePledgeFormContainer} />
      <Route path='/' component={GreetingContainer}/>
    </Switch>

  </div>
);

export default App;
