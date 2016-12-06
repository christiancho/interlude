import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout().then(() => {
      this.props.router.push("/");
    });
  }

  render(){
    return(
      <div className="site-wrapper">
        <section className="nav-bar-wrapper">
          <div className="nav-bar-logo" />
          <nav className="nav-bar">
            <ul>
              <li><Link to={ "/browse" }>Browse</Link></li>
            </ul>
          </nav>
          <div className="nav-bar-session">
            <span className="nav-bar-username">{ this.props.session.currentUser.username }</span>
            <button onClick={ this.handleClick }>Logout</button>
          </div>
        </section>
        <section className="main-content">
          { this.props.router.children }
        </section>
      </div>
    );
  }

}

export default withRouter(NavBar);
