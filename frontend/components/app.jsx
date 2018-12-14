import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProjectContainer from './project/project_container';
import {AuthRoute} from '../util/route_util';

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
      <ProjectContainer className='project-container'/>
    </header>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <footer className='footer'>
      FOOTER

    </footer>
  </div>

);

export default App;
