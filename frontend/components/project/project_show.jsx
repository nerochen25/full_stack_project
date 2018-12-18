import React from 'react';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.postId);
    this.props.fetchUsers();
  }

  render() {

    return (
      <div>
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
      </div>
    )
  };
};

export default ProjectShow;
