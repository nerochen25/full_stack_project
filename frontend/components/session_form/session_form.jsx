import React from 'react';
import { Link, Route } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      emailAddress: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  demoLogin() {
    let userInfo = {
      emailAddress: 'username@gmail.com',
      password: 'password'
    }
    this.props.processForm(userInfo).then((user) => {
      this.props.history.push('home')
    });
}


  render() {
    if (this.props.header === 'Sign up') {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          Please {this.props.header} or {this.props.navLink}
          <div>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Email Address:
              <input
                type="text"
                value={this.state.emailAddress}
                onChange={this.update('emailAddress')}
              />
            </label>
            <br/>
            <label>Password:
              <input
                className='password'
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )

    } else {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Please {this.props.header} or {this.props.link}
          <div>
            <label>Email Address:
              <input
                type="text"
                value={this.state.emailAddress}
                onChange={this.update('emailAddress')}
              />
            </label>
            <br/>
            <label>Password:
              <input
                className='password'
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
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
