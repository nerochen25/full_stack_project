import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItemContainer from './project_index_item_container';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      project: [],
    }
  };

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUsers();
    // this.props.fetchCategories();
    // this.props.fetchPledges();
  }

  render(){
    let projects = this.props.projects.map((project) => {
      return (
        <ProjectIndexItemContainer
          key={`${project.id}`}
          project={project}
        />
      )
    })
    return(
      <div>
        <ul>
          {projects}
          PROJECT INDEX
        </ul>
      </div>
    )
  }
}


export default ProjectIndex;
