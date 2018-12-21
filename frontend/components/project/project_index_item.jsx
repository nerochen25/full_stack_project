import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer/footer';



//props has {projects, users: undefined, creators, dispatch}
const ProjectIndexItem = ({ project, currentUserId, deleteProject }) => {
  const button = project.creator_id === currentUserId
    ? (
      <div className="delete-edit-btns">
        <br />
        <button className="project-delete-edit-btn">
          <Link to={`/projects/${project.id}/edit`}>Edit Project</Link>
        </button>
        <br />
        <br />
        <button className="project-delete-edit-btn" onClick={() => deleteProject(project.id)}>Delete Project</button>
      </div>
    ) : (<div></div>);

  let pledged_amount = `${(project.funding_goal/1.49).toFixed(2)}`.replace(/\d(?=(\d{3})+\.)/g, '$&,');
  let funding_goal = `${project.funding_goal - 0.00}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


  return (
  
      <div className="index-item-container">
        <div className="index-item">
          <div className="index-item-image">
            <Link to={`/projects/${project.id}`}><img className="index-project-image" src={`${project.photo}`}></img></Link>
          </div>
          <div className="index-item-title">
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </div>
          <div className="index-item-description">
            <Link to={`/projects/${project.id}`}>{project.description}</Link>
          </div>
          <br />
          <div className="index-item-funding-and-btn">
            <div className="index-item-funding">
              <Link to={`/projects/${project.id}`}>
                <br />
                <div className="pledged-amount">${pledged_amount}💰</div>

                <div className="funding-goal">pledged of ${funding_goal} goal</div>
                <br />
              </Link>
            </div>

              {button}

          </div>

        </div>
        <div className="index-item-creator"></div>
      </div>

  );
};

export default ProjectIndexItem;
