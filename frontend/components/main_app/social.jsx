import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';

class Social extends React.Component {

  componentDidMount(){
    this.props.fetchAllUsers();
  }

  usersList(){

    const usernames = Object.keys(this.props.users);
    const usersListItems = usernames.map( username => {
      // if ( username === "interlude" ) return;
      const user = this.props.users[username];
      return(
        <li className="user-item">
          <Link to={ `/users/${ user.username }` } className="user-item-link">
            <div className="user-item-pic"
              style={ { backgroundImage: `url(${ user.image_url })` } }/>
            <div className="user-item-info">
              <h2>{ user.username }</h2>
              <h3>{ user.f_name } { user.l_name }</h3>
              <span>Member since: { (new Date(user.created_at)).toLocaleDateString() }</span>
            </div>
        </Link>
        </li>
      );
    });

    return (
      <ul className="users-list">
        { usersListItems }
      </ul>
    );

  }

  render() {
    if ( this.props.loading ) return (<Spinner />);

    return(
      <section className="main-container users">
        <h1>Users</h1>
        { this.usersList() }
      </section>
    );
  }

}

export default Social;
