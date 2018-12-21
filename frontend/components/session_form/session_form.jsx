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
      check: false
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

  isChecked(e){
    e.preventDefault();
    this.setState({
      check: true
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({
          username: "",
          emailAddress: "",
          password: ""
        })
  }

  demoLogin() {
    let userInfo = {
      emailAddress: 'username@gmail.com',
      password: 'password'
    }
    this.props.processForm(userInfo).then((user) => {
      this.props.history.push('/')
    });
}


  render() {
    if (this.props.header === 'Sign up') {
      return (
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
            <input className='submit-btn' type="submit" value='Create Account' />
          </ol>
          </div>
        </form>
        <footer className='auth-form-footer'>
          {this.props.linkText} <p className='p-title'>{this.props.link}</p>
        </footer>
      </div>
      </div>
      </div>
    )

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
            <input className='submit-btn' type="submit" value='Log me in!' />
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
//
// import React from 'react';
// import { merge } from 'lodash';
// import { withRouter } from 'react-router-dom';
//
// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: ""
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.demoLogin = this.demoLogin.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.processForm(merge({}, this.state)).then((user) => {
//       this.props.history.push('home')
//     });
//     this.setState({
//       name: "",
//       email: "",
//       password: ""
//     })
//   }
//
//   update(field) {
//     return (e) => {
//       this.setState({
//         [field]: e.target.value
//       })
//     }
//   }
//
//   demoLogin(e) {
//     e.preventDefault();
//     let userInfo = {
//       email: 'username@gmail.com',
//       password: 'password'
//     }
//     this.props.processForm(userInfo).then((user) => {
//       this.props.history.push('home')
//     });
//   }
//
//   render() {
//     let nameInput;
//     if (this.props.header === 'Sign up') {
//       nameInput = <input type="text" onChange={this.update('name')} value={this.state.name} placeholder='Name:' className='SignupName'></input>;
//     }
//
//     let demoButton;
//     if (this.props.header === 'Log in') {
//       demoButton = <input type="submit" value="Sign in as a guest" onClick={this.demoLogin} className='demo-login'></input>;
//     }
//
//     return (
//       <form onSubmit={this.handleSubmit} className="session-form">
//         <h1 className="session-text-top">{this.props.header}</h1>
//         <ul className="error">
//           {this.props.errors.map((error, i) => {
//             return <li key={`${i}`}>{error}</li>
//           })}
//         </ul>
//           { nameInput }
//           <input type="text" onChange={this.update('email')} value={this.state.email} placeholder='Email: '></input>
//         <br></br>
//           <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password:"></input>
//           <input className='enter-button' type="submit" value={this.props.buttonText}></input>
//           { demoButton }
//           <div className="session-text-bottom">
//           <p>{this.props.linkText}</p>
//           <p className="session-link">{this.props.link}</p>
//           </div>
//       </form>
//     )
//   }
// }
//
// export default withRouter(SessionForm)
