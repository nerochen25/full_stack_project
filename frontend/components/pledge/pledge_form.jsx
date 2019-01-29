import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../footer/footer';


class CreatePledgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pledge;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({ amount: e.target.value })
    }
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.action(this.state)
    this.props.history.replace(`/projects/${this.props.project.id}`)
  };
  

  render() {
      return (
        <div className="pledge-form">
          <form onSubmit={this.handleSubmit}>
              <h1 className='support-title'>Support this project</h1>
              <div>                
                <p>Pledge amount</p>
                <div>
                  <p>$</p>
                  <input className="pledge_amount_input" type='text' value={this.state.amount} onChange={this.update()}></input>
                </div>
                <button>{this.props.buttonText}</button><br></br>
                <input className="pledge_amount_submit_btn" type="submit" value="Submit"/>
              </div>
            </form>
        </div>
      )
  }
}

export default CreatePledgeForm;