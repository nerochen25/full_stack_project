import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../project/project_show';
import ProjectForm from '../project/project_form';
import ProjectIndexContainer from '../project/project_index_container';



class Greeting extends React.Component {

  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    const notLoggedIn = () => {
      return (
        <div className="notLoggedIn-div">
          <ProjectIndexContainer/>
        </div>
      );
    };

    const loggedIn = () => {
      return (
        <div className='logged-in-div'>

          <ProjectIndexContainer/>
        </div>
      );
    };

    if (currentUser) {
      return loggedIn();
    } else {
      return notLoggedIn();
    };
  };
}

export default Greeting;
