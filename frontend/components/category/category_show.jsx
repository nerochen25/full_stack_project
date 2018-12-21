import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from '../project/project_index_item';
import Footer from '../footer/footer';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategory(this.props.match.params.id);
  }

  render() {
    let projects;
    let categoryId = Number(this.props.match.params.id);
    if (Object.values(this.props.projects).length !== 0) {
      projects =
      <ul className="category-show-ul">
        {Object.values(this.props.projects).reverse().filter((project) => {
          return project.category_id == categoryId;
        }).map((project) => {
          let creator = this.props.users[project.creator_id];
          return (
            <div key={project.id}>
              <ProjectIndexItem project={project} creator={creator} category={this.props.category} pledges={this.props.pledges}/>
            </div>
          );
        })}
      </ul>
    }

    // else {
    //   projects = <h2 className="no-project">Sorry, no projects in this category yet!</h2>;
    //     console.log(projects);
    // }

    return (
    <div>
    <div className="category-show-page">
      <div className="index-item-container-x">
        <div className="grid-index-item-container-x">
          <div className="grid-index-item-box-x">
            <div className='grid-index-items-x'>
              {projects}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    );
  }
}

export default CategoryShow;
