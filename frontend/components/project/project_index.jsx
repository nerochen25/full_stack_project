import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItemContainer from './project_index_item_container';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  };

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUsers();
  }

  render() {
    debugger

    const projects = this.props.projects.map((project) => {
      return (
        <ProjectIndexItemContainer
          key={project.id}
          project={project}
          creator={this.props.users[project.creator_id]}
          />
      );
    });
    return (
      <div>
        <ul>
          {projects}
          PROJECT INDEX
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
