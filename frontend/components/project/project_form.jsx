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
      photoUrl: this.props.project.photo,
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
    formData.append('project[photoUrl]', this.state.photoUrl);

    if (this.state.photoFile) {
      formData.append('project[photo]', this.state.photoFile);
    };

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
    } else {
      this.setState({ photoFile: null, photoUrl: "" });
    }
  };

  render() {
    const photoPreview = this.state.photoUrl ? (
      <img className="photo-preview" src={this.state.photoUrl} />
    ) : null;

    const categoryOptions = this.props.categories.map((category) => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      );
    });
    console.log(this.state.photoFile);
    console.log(this.state.photoUrl);

    return (
      <div className="entire-new-form-page">
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
        <div className="create-project" id='create-project'>
          <form onSubmit={this.handleSubmit}>
            <div className='grid-form-container1'>
              <div>
                <div className='grid-form-upper-nav'>
                  <div className="form-upper-nav-logo">
                    <Link to='/' className="form-upper-nav-logo-link">
                      <img className="logo-image-form" src={"https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Screen+Shot+2018-12-21+at+2.23.39+PM.png"}/>
                    </Link>
                  </div>
                  <hr className='form-separater'/>
                  <div className="form-upper-nav-page-num">
                    <div className="form-page-num">1 of 4</div>
                  </div>
                </div>
              </div>
              <div className="category-selector-box">
                <h2 className="category-selector-h2">First, let's get you set up.</h2>
                <h3 className="category-selector-h3">Pick a project category to connect with a specific community. You can always update this later.</h3>
              </div>
              <br />
              <select className="category-dropdown" onChange={this.update('category_id')} value={this.state.category_id}>
                <option className='default-category-select' value='0'>Select your category</option>
                 {categoryOptions}
              </select>
              <br />
              <br />
              <br />
              <HashLink className="grid-content-box1-btn" to="#project-idea">Next: Project idea</HashLink>
                <p className="form-policy">To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
            </div>
            <div className='grid-form-container2' id="project-idea">
              <div>
                <div className='grid-form-upper-nav'>
                  <div className="form-upper-nav-logo">
                    <Link to='/' className="form-upper-nav-logo-link">
                      <img className="logo-image-form" src={"https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Screen+Shot+2018-12-21+at+2.23.39+PM.png"}/>
                    </Link>
                  </div>
                  <hr className='form-separater'/>
                  <div className="form-upper-nav-page-num">
                    <div className="form-page-num">2 of 4</div>
                  </div>
                </div>
              </div>
              <div className="category-selector-box">
                <h2 className="category-selector-h2">Give a title of your project and describe what you'll be creating.</h2>
                <h3 className="category-selector-h3">And don’t worry, you can edit this later, too.</h3>
              </div>
              Title:
              <br />
              <input type="text" value={this.state.title} onChange={this.update('title')} />
              <br />
              <br />

              Description
              <br/>
              <textarea type="text" value={this.state.description} onChange={this.update('description')}></textarea>
              <br />
              <br />
              <br />

              <HashLink className="grid-content-box1-btn" to="#project-funding-goal">Next: Funding goal</HashLink>
                <p className="form-policy">To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
            </div>
            <div className='grid-form-container3' id="project-funding-goal">
              <div>
                <div className='grid-form-upper-nav'>
                  <div className="form-upper-nav-logo">
                    <Link to='/' className="form-upper-nav-logo-link">
                      <img className="logo-image-form" src={"https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Screen+Shot+2018-12-21+at+2.23.39+PM.png"}/>
                    </Link>
                  </div>
                  <hr className='form-separater'/>
                  <div className="form-upper-nav-page-num">
                    <div className="form-page-num">3 of 4</div>
                  </div>
                </div>
              </div>
              <div className="category-selector-box">
                <h2 className="category-selector-h2">Set a funding goal to achieve your dream idea.</h2>
                <h3 className="category-selector-h3">Tell us the estimated value of your project.</h3>
              </div>
              Project End Date:
              <br />
              <input type='date' value={this.state.due_date} onChange={this.update('due_date')} />
              <br />
              <br />
              Funding Goal:
              <br />
              <input type='float' value={this.state.funding_goal} onChange={this.update('funding_goal')} />
                <br />
                <br />
                <br />
              <HashLink className="grid-content-box1-btn" to="#project-image">Next: Project image</HashLink>
              <p className="form-policy">To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
            </div>
            <div className='grid-form-container4' id="project-image">
              <div>
                <div className='grid-form-upper-nav'>
                  <div className="form-upper-nav-logo">
                    <Link to='/' className="form-upper-nav-logo-link">
                      <img className="logo-image-form" src={"https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Screen+Shot+2018-12-21+at+2.23.39+PM.png"}/>
                    </Link>
                  </div>
                  <hr className='form-separater'/>
                  <div className="form-upper-nav-page-num">
                    <div className="form-page-num">4 of 4</div>
                  </div>
                </div>
              </div>
              <div className="category-selector-box">
                <h2 className="category-selector-h2">Finally, provide a high-quality image.</h2>
                <h3 className="category-selector-h3">Better image, better chance.</h3>
              </div>
              <br />
              Upload Image File:
              <br />
              <input type='file' onChange={this.handleFile.bind(this)}/>
              <br />
              <h3 className='image-preview'>Image Preview</h3>
              {photoPreview}
              <br />
              <br />
              <br />
              <input type="submit" value={this.props.formType} className="grid-content-box1-btn"/>
              <p className="form-policy">To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
