import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import ProjectIndexItemContainer from './project_index_item_container';
import CreateProjectFormContainer from './create_project_form_container';
import Footer from '../footer/footer';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUsers();
  }

  searchProjects(query) {
    query = query.toLowerCase();
    if (query == '') {
      this.setState({
        projects: [],
      });
    } else {
      let searchedProjects = this.props.projects.filter((project) => {
        return project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query)
      });
      this.setState({ projects: searchedProjects });
    }
  }

  handleSearch(e) {
    this.searchProjects(e.target.value);
  }

  render() {
    const searchedProjects = this.state.projects.map((project) => {
      return (
        <div>
        <br />
        <li className="search-result-list-item" key={project.id}><Link to={`/projects/${project.id}`}>{project.title}</Link></li>
        </div>
      );
    });

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
        <div className="search-box-container">
          <div id='search-bar'>
            <input className='search-input' type='text' placeholder='Search by project title or description...' onKeyUp={this.handleSearch} />
          </div>
          <div className='search-result'>
            <ul>{searchedProjects}</ul>
          </div>
        </div>
        <div className="index-item-container">
          <div className="grid-index-item-container">
            <div className="grid-index-item-box">
              <div className="index-upper-bar">
                <a>FRESH FAVORITES   </a><a className="index-view-more">View more</a>

              </div>
              <br />
              <div className="grid-index-items">

                  {projects}

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectIndex;
