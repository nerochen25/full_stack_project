import React from 'react';

class ProjectFormStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.project;
  }

  update(field){
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text" value={this.state.title} onChange={this.update('title')} />
          <br />
          Description:
          <textarea type="text" value={this.state.description} onChange={this.update('description')}></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default ProjectFormStep1;
