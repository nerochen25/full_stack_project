import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

  componentDidMount() {

    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchUsers();
  }

  render() {

    let button;
    if (this.props.currentUser === undefined) {
      button = <div></div>;
    }

    if (this.props.currentUser.id !== this.props.project.creator_id) {
      button = <div></div>;
    } else {
      button =
      <div>
        <button className="project-delete-edit-btn">
          <Link to={`/projects/${this.props.match.params.id}/edit`}>Edit Project</Link>
        </button>
        <button className="project-delete-edit-btn" onClick={() => this.props.deleteProject(this.props.match.params.id)}>Delete Project</button>
      </div>;
    };

    return (
      <div>
        <br />
        <img src={this.props.project.photoUrl}></img>
        <h1>{this.props.project.title}</h1>
        <br />
        Description:
        <p>{this.props.project.description}</p>
        <br />
        Funding Goal: <span>${this.props.project.funding_goal}</span>
        <br />
        Due Date: <span>{this.props.project.due_date}</span>
        <br />
        <p>Created By {this.props.creator.username}</p>
        <br />
        {button}
      </div>
    );
  };
};

export default ProjectShow;
