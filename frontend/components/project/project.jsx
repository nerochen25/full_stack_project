import React from 'react';
import { Link } from 'react-router-dom';



const Project = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
    
    </nav>
  );
  const personalProject = () => (
    <hgroup>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalProject() : sessionLinks();
};


export default Project;
