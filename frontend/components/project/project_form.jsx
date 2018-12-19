import React from 'react';

import { Link, withRouter, Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.project.id,
      title: this.props.project.title,
      description: this.props.project.description,
      funding_goal: this.props.project.funding_goal,
      category_id: this.props.project.category_id,
      due_date: this.props.project.due_date,
      creator_id: this.props.project.creator_id,
      photoFile: this.props.project.photoFile,
      photoUrl: null,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.project.id !== this.props.project.id) {
      this.setState(this.props.project);
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[id]', this.state.id);
    formData.append('project[photo]', this.state.photoFile);
    formData.append('project[title]', this.state.title);
    formData.append('project[description]', this.state.description);
    formData.append('project[funding_goal]', this.state.funding_goal);
    formData.append('project[creator_id]', this.state.creator_id);
    formData.append('project[category_id]', this.state.category_id);
    formData.append('project[due_date]', this.state.due_date);
    if (this.state.photoFile) {
      formData.append('project[photo]', this.state.photoFile);
    }
    this.props.action(formData)
      .then(() => this.props.history.push('/projects'));
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  render() {
    console.log(this.state)
    const categoryOptions = this.props.categories.map((category) => {
      return (
        <option value={category.id}>{category.name}</option>
      );
    });

    return (
      <div>
        <section className="section-project-form-1">
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-content-container1">
                <div className='grid-content-box1'>
                  <h1 className="grid-content-box1-title">
                    Bring your creative project to life.
                  </h1>
                  <HashLink className="grid-content-box1-btn" to="#create-project">Start a project</HashLink>
                </div>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-content-container2-1">
                <Link to='/' className='project-image-link'>
                  <span className="grid-image-text">
                    De La Soul raised $600,874 to make their Grammy-winning album, And the Anonymous Nobody…, with full creative control.
                  </span>
                </Link>
              </div>
              <div className="grid-content-container2-2">
                <div className='container2-project-image'>
                  <div className='container2-project-image-link'>
                    <Link to='/' className='container2-project-image-link'>
                      <span className="grid-image-text">
                        With the support of 13,454 backers, Elena Favilli and Francesca Cavallo published Good Night Stories for Rebel Girls — and became best-selling authors.
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='grid-row'>
                  <div className='container2-project-image'>
                    <Link to='/' className="container2-project-image-link2">
                      <span className="grid-image-text">
                        Since raising over $300K through seven successful projects, Craighton Berman now runs his own homewares company with his partner, Emily.
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div id='create-project'>
          <form onSubmit={this.handleSubmit}>
            Title:
            <input type="text" value={this.state.title} onChange={this.update('title')} />
            <br />
            Description:
            <textarea type="text" value={this.state.description} onChange={this.update('description')}></textarea>
            <br />
            Project End Date:
            <input type='date' value={this.state.due_date} onChange={this.update('due_date')} />
            <br />
            Funding Goal:
            <input type='float' value={this.state.funding_goal} onChange={this.update('funding_goal')} />
            <br />
            Upload Image File:
            <input type='file' onChange={this.handleFile.bind(this)} />
            <br />
            Category:
            <select className="category-dropdown" onChange={this.update('category_id')} value={this.state.category_id}>
              <option className='default-category-select' value='0'>Select your category</option>
               {categoryOptions}
            </select>
            <br />
            <input type="submit" value={this.props.formType}/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
