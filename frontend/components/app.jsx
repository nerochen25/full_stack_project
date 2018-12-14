import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './project/project_index_container';

const App = () => (

  <div className='main-content'>
    <div className="relative">
      <section className="nav-container">
        <section className="nav-bar-logo">
          <a className="logo-image-container" href="#/">
            <img className="logo-image" src={"https://d3mlfyygrfdi2i.cloudfront.net/preview-logo-color.png"}/>
          </a>
        </section>
        <section className="nav-left">
          <button className="explore-btn">Explore</button>
          <a href="#" className="start-a-project-link">Start a project</a>
        </section>
        <section className="nav-right">
          <button className="search-btn">
            Search <br /> <i className="fa fa-search"></i>
          </button>
          <a className="sign-in-link" href="#/login">Sign In</a>
        </section>
      </section>
    </div>
    <header>
      <Link to='/'>
        <h1 className='we-are-starters-header'></h1>
      </Link>
      <GreetingContainer className='greeting-container'/>
    </header>
    <div className='form-container'>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
    <Route exact path="/projects" component={ProjectIndexContainer} />
    <footer className='footer'>
      FOOTER
    </footer>
  </div>
);

export default App;
