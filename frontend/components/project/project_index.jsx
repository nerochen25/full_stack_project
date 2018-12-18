import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import ProjectIndexItemContainer from './project_index_item_container';
import CreateProjectFormContainer from './create_project_form_container';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  };

  componentDidMount() {
    this.props.fetchProjects(this.props.projects);
    this.props.fetchUsers(this.props.users);
  }

  // componentDidUpdate(oldProps) {
  //   if (oldProps.projects !== this.props.projects) {
  //     this.setState(this.props.projects);
  //   }
  // }

  render() {
    let projects = this.props.projects.map((project) => {

      return (
        <ProjectIndexItemContainer
          key={`${project.id}`}
          project={project}
          currentUserId={this.props.currentUserId}
          deleteProject={this.props.deleteProject}
        />
      );
    });

    return (
      <div>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
