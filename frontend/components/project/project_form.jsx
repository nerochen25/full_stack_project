import React from 'react';

import { Link, withRouter, Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.project.id !== this.props.project.id) {
      this.setState(this.props.project);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.history.push('/projects');
  }

  render() {
    const categories = {
      1: 'Art',
      2: 'Comic',
      3: 'Crafts',
      4: 'Dance',
      5: 'Design',
      6: 'Fashion',
      7: 'Film & Video',
      8: 'Food',
      9: 'Games',
      10: 'Journalism',
      11: 'Music',
      12: 'Photography',
      13: 'Publishing',
      14: 'Technology',
      15: 'Theater',
    };

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
            Category:
            <select className="category-dropdown" onChange={this.update('category_id')} value={this.state.category_id}>
              <option className='default-category-select' value='0'>Select your category</option>
              <option value="1">Art</option>
              <option value="2">Comics</option>
              <option value="3">Crafts</option>
              <option value="4">Dance</option>
              <option value="5">Design</option>
              <option value="6">Fashion</option>
              <option value="7">Film and Video</option>
              <option value="8">Food</option>
              <option value="9">Games</option>
              <option value="10">Journalism</option>
              <option value="11">Music</option>
              <option value="12">Photography</option>
              <option value="13">Publishing</option>
              <option value="14">Technology</option>
              <option value="15">Theater</option>
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
