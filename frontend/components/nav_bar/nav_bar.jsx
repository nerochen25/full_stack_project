import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let logIn;
    if (this.props.currentUserId) {
      logIn =
      <div>
      <li onClick={this.props.logout} className='sign-in-link'>Log out</li>
      </div>
    } else {
      logIn = <a className="sign-in-link" href="#/login">Sign In</a>
    };

    return (
      <div className='main-content'>
        <div className="relative">
          <section className="nav-container">
            <section className="nav-bar-logo">
              <a className="logo-image-container" href="#/">
                <img className="logo-image" src={"https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/wearestarters-logo.png"}/>
              </a>
            </section>
            <section className="nav-left">
              <Link to='/projects'className="explore-btn">
                Explore
              </Link>
              <Link className="start-a-project-link" to="/projects/create">Start a project</Link>
            </section>
            <section className="nav-right">
              <HashLink to='#search-bar'>
                <Link to='/'>
                <button className="search-btn">
                  Search <br /> <i className="fa fa-search"></i>
                </button>
                </Link>
              </HashLink>
              {logIn}
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default NavBar;
