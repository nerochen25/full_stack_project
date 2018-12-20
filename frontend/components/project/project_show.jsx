import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.categories;
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchUsers();
  }

  render() {
    let button;
    if (this.props.currentUser === undefined) {
      button = <div></div>;
    }

    if (this.props.currentUser === undefined || this.props.currentUser.id !== this.props.project.creator_id) {
      button = <div></div>;
    } else {
      button =
      <div>
        <button className="project-delete-edit-btn">
          <Link to={`/projects/${this.props.match.params.id}/edit`}>Edit Project</Link>
        </button>
        <button className="project-delete-edit-btn" onClick={() => this.props.deleteProject(this.props.match.params.id)}>Delete Project</button>
      </div>;
    };


    let categories = this.props.categories[this.props.project.category_id] || [];
    let category = Object.values(categories)[1];

    let pledged_amount = `${this.props.project.funding_goal - 9536.43}`.replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let funding_goal = `${this.props.project.funding_goal - 0.00}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


    return (
      <div className='campaign-state-live'>
        <div className='content-wrap'>
          <div className='main-show-content'>
            <div>
              <div className="grid-show-container">
                <div className="grid-show-image-container">
                  <div className="grid-show-image-box">
                    <div className="grid-show-image">
                      <div className="show-image">
                        <img className="show-project-image" src={this.props.project.photoUrl}/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="grid-show-upper-bar-container">
                <div className="grid-show-upper-bar-box">
                  <div className="show-upper-bar-box">
                    <div className="show-upper-bar">
                      <Link to='/projects' className="show-upper-bar-link-projects">
                        <div className="show-upper-bar-icon1">
                          🌍
                        </div>

                        <span className="show-upper-bar-icon1-text"><span>Project We Love</span></span>
                      </Link>

                      <Link to='/projects' className="show-upper-bar-link-category">
                        <span className="show-upper-bar-icon2">
                          📋
                        </span>

                        <span className="show-upper-bar-icon2-text"><span>{category}</span></span>
                      </Link>

                      <Link to='/projects' className="show-upper-bar-link-location">
                        <span className="show-upper-bar-icon3">
                          📍
                        </span>

                        <span className="show-upper-bar-icon3-text">California, US</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-show-info-container">
                <div className="grid-show-info-box">
                  <div className="grid-show-info">
                    <div className="show-project-side-info">
                      <Link className="show-side-info-link-to-creator" to='/projects'>
                        <img
                          className="show-project-side-circle-image"
                          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/kickstarter-512.png"/>
                      </Link>

                      <span className="show-project-side-creator-info">
                        By{' '}

                        <Link to='/projects'
                          className="show-side-info-link-to-creator-projects">
                           {this.props.creator.username}
                        </Link>
                      </span>

                      <div className="show-side-info-number-of-creator-projects">
                        <Link to='/projects' className="show-side-info-link-to-projects">
                          2 created
                        </Link>
                      </div>

                      <button className="show-follow-creator-btn">
                        Follow Creator
                      </button>
                    </div>
                    <div className="show-title-description-container">
                        <h2 className="show-title">
                          {this.props.project.title}
                        </h2>

                        <p className="show-project-description">
                          {this.props.project.description}
                        </p>

                        <hr className="show-info-green-line-separater"/>

                    </div>
                  </div>
                </div>
              </div>


              <div className="grid-show-pledge-info-container">
                <div className="grid-show-pledge-box">
                  <div className="grid-show-pledge-upper-space">
                    <div className="grid-show-pledge-space"></div>
                  </div>

                  <div className="show-pledge-info-box">
                    <div className="show-pledge-info-1">
                      <div className="num-nowrap"></div>

                      <div className="show-project-pledge-amount-box">
                        <span className="show-project-pledge-amount-span">
                          <span className="show-project-pledge-amount">${pledged_amount}</span>
                        </span>

                        <div className="show-project-pledge-amount-icon">
                          💰
                        </div>
                      </div>

                      <span className="show-project-pledge-goal-amount-box">
                        <span className="show-project-pledge-goal-amount-span">
                          pledged of

                          <span className="show-project-pledge-goal-amount"> ${funding_goal} </span>

                          goal
                        </span>
                      </span>
                    </div>

                    <div className="show-pledge-info-2">
                      <div className="show-pledge-backers-num"><span>52</span></div>

                      <span className="show-pledge-backers-text">backers</span>
                    </div>

                    <div className="show-plege-info-3">
                      <div>
                        <span className="show-num-days-left">18</span>

                        <span className="show-num-days-left-text">days to go</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-show-backing-reminding-btns-container">
                <div className="grid-show-backing-reminding-btns-box">
                  <div className="show-backing-reminding-btns-box">
                    <a className="show-back-this-project-btn">
                      Back this project
                    </a>

                    <div className="show-remind-me-btn-and-sharing-icons">
                      <div className="show-remind-me-btn-div">
                        <div>
                          <div>
                            <button className="show-remind-me-btn">
                              <span className="show-remind-me-btn-icon">
                                ♡
                              </span>

                              <span className="show-remind-me-btn-text">Remind me</span>
                            </button>
                          </div>

                          <div></div>
                        </div>
                      </div>

                      <div className="show-sharing-icons">
                        <div className="show-sharing-icons-list">
                          <div className="show-sharing-icons-items">
                            <div className="show-sharing-icon-item1">
                              <a className="show-sharing-icon-fb">
                                <span className="show-sharing-fb">
                                  𝗳
                                </span>
                              </a>
                            </div>

                            <div className="show-sharing-icon-item2">
                              <a className="show-sharing-icon-t">
                                <span className="show-sharing-t">
                                  📞
                                </span>
                              </a>
                            </div>

                            <div className="show-sharing-icon-item3">
                              <a className="show-sharing-icon-mail">
                                <span className="show-sharing-mail">
                                  ✉️
                                </span>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-show-warning-details-container">
                <div className="grid-show-warning-details-box">
                  <div>
                    <p className="show-warning-details-p">
                      <span className="show-warning-all-or-nothing">
                        <a className="show-all-or-nothing-link">
                          All or nothing.
                        </a>
                      </span>

                      This project will only be funded if it reaches its goal by {this.props.project.due_date}
                      12:00 AM PST.
                    </p>
                  </div>
                </div>
              </div>



            </div>
        </div>
      </div>
    </div>
    );
  };
};

export default ProjectShow;
