import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(property){
    return event => {
      this.setState({ [property]: event.target.value });
    };
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.clearErrors();
    this.props.login(this.state).then(
      () => this.props.router.push("/browse"),
      () => $('.shake').effect('shake')
    );
  }

  guestLogin(event){
    event.preventDefault();
    this.props.login({
      username: "guest",
      password: "password"
    }).then(() => this.props.router.push("/browse"));
  }

  render() {
    const errorMessage = !!this.props.errors ? this.props.errors.message[0] : "";
    const shakeClass = errorMessage === "" ? "" : "shake" ;
    return (
      <section className={ "splash-left " + shakeClass }>
        <div className="auth-form-logo" />
        <div className="login-error">{ errorMessage }</div>
        <button className="green-button" onClick={ this.guestLogin }>Guest Account</button>
        <form onSubmit={ this.handleSubmit }>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Interlude username"
            value={ this.state.username }
            onChange={ this.update("username") }
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={ this.state.password }
            onChange={ this.update("password") }
          />

          <button className="clear-button">
            Login
          </button>

        </form>
        <div>Need an account? <Link to={"/signup"}>Sign Up</Link>.</div>
      </section>
    );
  }

}

export default LoginForm;
