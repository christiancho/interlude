import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout();
  }

  activateLink(){
    $('.active-page').removeClass('active-page');
    const activeLink = "." + this.props.router.location.pathname.slice(1) + "-link";
    $(activeLink).addClass('active-page');
  }

  componentWillReceiveProps(newProps){
    if (!newProps.session.currentUser){
      this.props.router.push("/");
    }
    this.activateLink();
  }

  componentDidMount(){
    this.activateLink();
  }

  render(){

    return(
      <header className="nav-bar-wrapper">
        <div className="nav-bar-logo" />
        <nav className="nav-bar-links">
          <ul>
            <li className="search-link"><Link to={ "/search" }>Search</Link></li>
            <li className="browse-link"><Link to={ "/browse" }>Browse</Link></li>
            <li className="your-music-link"><Link to={ "/your-music" }>Your Music</Link></li>
            <li className="radio-link"><Link to={ "/radio" }>Radio</Link></li>
            <li className="social-link"><Link to={ "/social" }>Follow</Link></li>
          </ul>
        </nav>
        <div className="nav-bar-session">
          <span className="nav-bar-username">{ this.props.session.currentUser.username }</span>
          <button onClick={ this.handleClick }>Logout</button>
        </div>
      </header>
    );
  }

}

export default withRouter(NavBar);
