import React from 'react';
import { Link, withRouter } from 'react-router';
import AlertContainer from 'react-alert';
import SearchBarContainer from './search/search_bar_container';

class NavBar extends React.Component{

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.turnSearchBarOff = this.turnSearchBarOff.bind(this);
    this.turnSearchBarOn = this.turnSearchBarOn.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout();
  }

  activateLink(){
    $('.active-page').removeClass('active-page');
    const subPath = this.props.router.location.pathname.slice(1);
    if ( subPath.includes("/") ) return;
    const activeLink = "." + subPath + "-link";
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

  turnSearchBarOff(){
    $('.search-bar').removeClass('active');
    $('.search-bar-clearer').removeClass('clearer-active');
  }

  turnSearchBarOn(){
    $('.search-bar').addClass('active');
    $('.search-bar-clearer').addClass('clearer-active');
  }

  toggleSearch(){
    if ( $('.search-bar').hasClass('active') ){
      this.turnSearchBarOff();
    } else {
      this.turnSearchBarOn();
    }
  }

  render(){

    if ( !this.props.session.currentUser ) {
      return (
        <header className="nav-bar-wrapper"></header>
      );
    }

    const username = this.props.session.currentUser.username;

    return(
      <header className="nav-bar-wrapper">
        <Link to={ "/browse" }>
          <div className="nav-bar-logo" />
        </Link>
        <nav className="nav-bar-links">
          <ul>

            <li className="search-link" onClick={ this.toggleSearch }>
              <a><div className="icon-search">Search</div></a>
            </li>

            <li className="browse-link">
              <Link to={ "/browse" }><div className="icon-browse">Browse</div></Link>
            </li>

            <li className="your-music-link">
              <Link to={ "/your-music" }><div className="icon-your-music">Your Music</div></Link>
            </li>

            {/*
            <li className="radio-link">
              <Link to={ "/radio" }><div className="icon-radio">Radio</div></Link>
            </li>
            */}

            <li className="social-link">
              <Link to={ "/social" }><div className="icon-social">Social</div></Link>
            </li>


          </ul>
        </nav>

        <SearchBarContainer />

        <div className="nav-bar-session">
          <Link to={ `/users/${ username }` }>
            <div
              className="nav-bar-image"
              style={ { backgroundImage: `url(${this.props.session.currentUser.image_url})` } }
            />
            <span className="nav-bar-username">{ username }</span>
          </Link>
          <button onClick={ this.handleClick }>Logout</button>
        </div>

        <AlertContainer ref={ (a) => global.msg = a } {...{
            offset: 20,
            position: 'top right',
            theme: 'dark',
            time: 4000,
            transition: 'fade'
        } }/>

      </header>
    );
  }

}

export default withRouter(NavBar);
