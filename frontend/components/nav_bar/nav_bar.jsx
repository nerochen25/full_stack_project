import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render(){
    return (
      <div className='main-content'>
        <div className="relative">
          <section className="nav-container">
            <section className="nav-bar-logo">
              <a className="logo-image-container" href="#/">
                <img className="logo-image" src={"https://d3mlfyygrfdi2i.cloudfront.net/preview-logo-color.png"}/>
              </a>
            </section>
            <section className="nav-left">
              <button className="explore-btn" href='#/projects'>Explore</button>
              <Link className="start-a-project-link" to="/projects/create">Start a project</Link>
            </section>
            <section className="nav-right">
              <button className="search-btn">
                Search <br /> <i className="fa fa-search"></i>
              </button>
              <a className="sign-in-link" href="#/login">Sign In</a>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default NavBar;
