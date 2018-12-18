import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.postId);
    this.props.fetchUsers();
  }

  render() {
    debugger
    const button = this.props.project.creator_id === this.props.currentUser.id
      ? (
        <div>
          <button className="project-delete-edit-btn">
            <Link to={`/projects/${this.props.project.id}/edit`}>Edit Project</Link>
          </button>
          <button className="project-delete-edit-btn" onClick={() => this.props.deleteProject(this.props.project.id)}>Delete Project</button>
        </div>
      ) : (<div></div>);
    return (
      <div>
        <img src={`${this.props.project.photo}`}></img>
        <h1>{this.props.project.title}</h1>
        <br />
        Description:
        <p>{this.props.project.description}</p>
        <br />
        Funding Goal: <span>{this.props.project.funding_goal}</span>
        <br />
        Due Date: <span>{this.props.project.due_date}</span>
        <br />
        <p>Created By {this.props.creator.username}</p>
        <br />
        {button}
      </div>
    )
  };
};

export default ProjectShow;
