import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//props has {projects, users: undefined, creators, dispatch}
const ProjectIndexItem = ({ project, currentUserId, deleteProject }) => {
  const button = project.creator_id === currentUserId
    ? (
      <div>
        <button className="project-delete-edit-btn">
          <Link to={`/projects/${project.id}/edit`}>Edit Project</Link>
        </button>
        <button className="project-delete-edit-btn" onClick={() => deleteProject(project.id)}>Delete Project</button>
      </div>
    ) : (<div></div>);

  return (
      <li>
        <Link to={`/projects/${project.id}`}>
        <img src={`${project.photo}`}></img>
        <br />
        {project.title}
        <br />
        {project.description}
        <br />
        {project.funding_goal}
        <br />
        {button}
        </Link>
      </li>
  );
};

export default ProjectIndexItem;
