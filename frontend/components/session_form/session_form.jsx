import React from 'react';
import { Link, Route } from 'react-router-dom';
import Footer from '../footer/footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      emailAddress: '',
      check: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  isChecked(e) {
    e.preventDefault();
    this.setState({
      check: true,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({
      username: "",
      emailAddress: "",
      password: ""
    });
  }

  demoLogin() {
    let userInfo = {
      emailAddress: 'username@gmail.com',
      password: 'password',
    };
    this.props.processForm(userInfo).then((user) => {
      this.props.history.push('/');
    });
  };

  render() {
    let signUpDisabled = this.state.username && this.state.emailAddress && this.state.password
      ? <input className='submit-btn' type="submit" value='Create Account' />
      : <input className='submit-btn' type="submit" value='Create Account' disabled/>;

    let logInDisabled = this.state.emailAddress && this.state.password
      ? <input className='submit-btn' type="submit" value='Log me in!' />
    : <input className='submit-btn' type="submit" value='Log me in!' disabled/>;

    if (this.props.header === 'Sign up') {
      return (
        <div>
        <div className='form-container'>
          <div className='user-acct-form'>
            <div className='acct-form'>
              <form className='auth-form' onSubmit={this.handleSubmit}>
                <h2 className='title'>Sign up</h2>
                <div className='form'>
                  <ol className='input-submit'>
                    <li className='username'>
                      <input
                        className='username-input'
                        type="text"
                        value={this.state.username}
                        placeholder='Name'
                        onChange={this.update('username')}
                      />
                    </li>
                    <br/>
                    <li className='email'>

                      <input
                        className='email-input'
                        type="email"
                        value={this.state.emailAddress}
                        placeholder='Email'
                        onChange={this.update('emailAddress')}
                      />
                    </li>
                    <br/>
                    <li className='password'>

                      <input
                        className='password-input'
                        type="password"
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.update('password')}
                      />
                    </li>
                    <br/>
                    <label className='check-box-container'>
                      Receive a weekly mix of handpicked projects, plus occasional Kickstarter news.
                      <input className='checkbox' type='checkbox' checked='checked' onChange={this.isChecked}/>
                      <span className='checkmark'></span>
                    </label>
                    <br/>
                    {signUpDisabled}
                  </ol>
                </div>
              </form>
              <footer className='auth-form-footer'>
                {this.props.linkText} <p className='p-title'>{this.props.link}</p>
              </footer>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );

    } else {
      return (
        <div>
          <div className='form-container'>
            <div className='user-acct-form'>
              <div className='acct-form'>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                  <h2 className='title'>Log in</h2>
                  <div className='form'>
                    <ol className='input-submit'>
                      <li className='email'>

                        <input
                          className='email-input'
                          type="email"
                          value={this.state.emailAddress}
                          placeholder='Email'
                          onChange={this.update('emailAddress')}
                        />
                      </li>
                      <br/>
                      <li className='password'>
                        <input
                          className='password-input'
                          type="password"
                          value={this.state.password}
                          placeholder='Password'
                          onChange={this.update('password')}
                        />
                      </li>
                      <br/>
                      <br/>
                      {logInDisabled}
                    </ol>
                  </div>
                </form>
                <footer className='auth-form-footer'>
                  <p className='p-title'>{this.props.link}</p>
                  <br />
                  {this.props.linkText} <a type="text" onClick={this.demoLogin} className='demo-login' value='Sign in as a guest'>Sign in as a guest</a>
                </footer>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default SessionForm;
