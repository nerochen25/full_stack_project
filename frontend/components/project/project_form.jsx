import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;

  }

  udpate(field){
    return e => this.setState({ [field]: e.target.value });
  }
   render(){
    return(
      <div>
        <section className="section-project-form-1">
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-content-container1">
                <div className='grid-content-box1'>
                  <h1 className="grid-content-box1-title">
                    Bring your creative project to life.
                  </h1>
                  <Link to='/projects/create' className="grid-content-box1-btn">
                    Start a project
                  </Link>
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
      </div>
    )
  }
}

export default withRouter(ProjectForm);
