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
          <h1>Pledge form here !!!</h1>
          <form onSubmit={this.handleSubmit}>
              <h1 className='support-title'>Support this project</h1>
              <div className='pledge-box'>
                <label className='check-container'>Make a pledge
                <input type='checkbox' />
                <span className='checkmark'></span>
                </label>
                <span></span>
                <p>Pledge amount</p>
                <div className='amount-box-container'>
                  <p>$</p>
                  <input type='text' value={this.state.amount} onChange={this.update()}></input>
                </div>
                <button>{this.props.buttonText}</button><br></br>
              </div>
            </form>
        </div>
      )
  }
}

export default CreatePledgeForm;