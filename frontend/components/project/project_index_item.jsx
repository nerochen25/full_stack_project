import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//props has {projects, users: undefined, creators, dispatch}
const ProjectIndexItem = (props) => {
  let project_arr = Object.values(props.projects).map((project) => {
    return (
      <div>
          <br />
          {project.title}
          <br />
          {project.description}
          <br />
          {project.funding_goal}
          <br />
          <button className="project-delete-edit-btn">
          <Link to={`/projects/${project.id}/edit`}>Edit Project</Link>
          </button>
          <button className="project-delete-edit-btn" >Delete Project</button>
      </div>
    );
  });

  return (
    <div>
      <ul>{project_arr}</ul>
    </div>
  );
};

export default ProjectIndexItem;
