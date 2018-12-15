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
        <Link to='/projects/create'>NEXT STEP</Link>
      </div>
    )
  }
}

export default withRouter(ProjectForm);
