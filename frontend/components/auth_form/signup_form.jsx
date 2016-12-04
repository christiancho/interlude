import React from 'react';
import { Link } from 'react-router';
import SignupErrors from './signup_errors';

class SignupForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username: "",
      email: "",
      confirm_email: "",
      f_name: "",
      l_name: "",
      password: "",
      email_match: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if ( this.props.loggedIn ) this.props.router.push("/browse");
  }

  update(property){
    return event => {
      if ( property === "confirm_email" ){
        const confirmEmailText = event.target.value;
        const emailMatch = confirmEmailText === this.state.email;
        this.setState({
          confirm_email: confirmEmailText,
          email_match: emailMatch
        });
      } else {
        this.setState({ [property]: event.target.value });
      }
    };
  }

  handleSubmit(event){
    const user = Object.assign({}, this.state);
    delete user.confirm_email;
    delete user.email_match;
    this.props.signup(user).then(() => this.props.router.push("/browse"));
  }

  render() {
    const confirmClass = this.state.email_match ? "" : "input-error";
    const buttonClass = this.state.email_match ? "green-button" : "grey-button";
    return (
      <section className="splash-left">
        <div className="auth-form-logo" />
        <h2>Create your free Interlude account</h2>
        <form onSubmit={ this.handleSubmit }>

          <SignupErrors errors={ this.props.errors } />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="e.g. johndoe"
            value={ this.state.username }
            onChange={ this.update("username") }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. john@email.com"
            value={ this.state.email }
            onChange={ this.update("email") }
          />

          <label htmlFor="confirm-email">Confirm email:</label>
          <div className={ confirmClass } >
            <input
              type="text"
              id="confirm-email"
              placeholder="Confirm email"
              value={ this.state.confirm_email }
              onChange={ this.update("confirm_email") }
            />
          </div>

          <label htmlFor="f-name">First name:</label>
          <input
            type="text"
            id="f-name"
            placeholder="John"
            value={ this.state.f_name }
            onChange={ this.update("f_name") }
          />

          <label htmlFor="l-name">Last name:</label>
          <input
            type="text"
            id="l-name"
            placeholder="Doe"
            value={ this.state.l_name }
            onChange={ this.update("l_name") }
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={ this.state.password }
            onChange={ this.update("password") }
          />

          <button className={ buttonClass } disabled={ !this.state.email_match }>
            Sign Up
          </button>
        </form>
        <div>Have an account? <Link to={"/login"}>Login</Link>.</div>
      </section>
    );
  }

}

export default SignupForm;
