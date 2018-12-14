import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">

    </nav>
  );
  const personalGreeting = () => (
    <hgroup>
      <h2>Hi, {currentUser.username}!</h2>
      <button className='log-out-btn' onClick={logout}>Log out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
