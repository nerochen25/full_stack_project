import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../project/project_show';
import ProjectForm from '../project/project_form';
import ProjectIndex from '../project/project_index';



class Greeting extends React.Component {

  render(){
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    const notLoggedIn = () => {
      return (
        <div>
          <Link className="sign-in-link" to='/login'>Sign in</Link>
        </div>
      )
    };

    const loggedIn = () => {
      return (
        <div>
          <img className='profile-img' src={'https://media.giphy.com/media/WvXuLOqJeJ0I0/giphy.gif'} />
          <div className='dropdown-content'>
            <li><Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link></li>
            <li onClick={logout} className='log-out-btn'>Log out</li>
          </div>
          <ProjectShow/>
        </div>
      )
    };

    if (currentUser) {
      return loggedIn()
    } else {
      return notLoggedIn()
    };
  };
}

export default Greeting;

// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup>
//       <h2>Hi, {currentUser.username}!</h2>
//       <button className='log-out-btn' onClick={logout}>Log out</button>
//     </hgroup>
//   );
//
//   return currentUser ? personalGreeting() : sessionLinks();
// };
