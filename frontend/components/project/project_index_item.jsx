import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//props has {projects, users: undefined, creators, dispatch}
const ProjectIndexItem = ({ project, currentUserId, deleteProject }) => {
  const button = project.creator_id === currentUserId
    ? (
      <div>
        <br />
        <button className="project-delete-edit-btn">
          <Link to={`/projects/${project.id}/edit`}>Edit Project</Link>
        </button>
        <br />
        <br />
        <button className="project-delete-edit-btn" onClick={() => deleteProject(project.id)}>Delete Project</button>
      </div>
    ) : (<div></div>);

  let pledged_amount = `${project.funding_goal - 9536.43}`.replace(/\d(?=(\d{3})+\.)/g, '$&,');
  let funding_goal = `${project.funding_goal - 0.00}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


  return (
      <li>
        <br />
        <Link to={`/projects/${project.id}`}>
          <br />
        <img src={`${project.photo}`}></img>
        <br />
        {project.title}
        <br />
        {project.description}
        <br />
        Pledged amount: ${pledged_amount}
        <br />
        Funding goal: ${funding_goal}
        <br />
        </Link>
        {button}
      </li>
  );
};

export default ProjectIndexItem;
