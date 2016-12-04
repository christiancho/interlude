import React from 'react';
import { withRouter } from 'react-router';

class AuthBegin extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pathname){
    return (event) => {
      this.props.router.push("/" + pathname);
    };
  }

  render(){
    return (
      <section className="splash-left">
        <div className="splash-logo" />
        <button type="button" className="green-button" onClick={ this.handleClick("login") }>login</button>
        <button type="button" className="clear-button" onClick={ this.handleClick("signup") }>sign up</button>
      </section>
    );
  }

}
export default withRouter(AuthBegin);
