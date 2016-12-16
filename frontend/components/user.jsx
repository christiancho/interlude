import React from 'react';
import Spinner from './spinner';
import { Link } from 'react-router';
import PlaylistsBar from './util/playlists_bar';

class User extends React.Component {

  constructor(props){
    super(props);

    this.openDialog = this.openDialog.bind(this);
    this.changeProfilePicture = this.changeProfilePicture.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.username);
  }

  componentWillReceiveProps(newProps){
    if ( this.props.params.username !== newProps.params.username){
      this.props.fetchUser(newProps.params.username);
    }
  }

  openDialog(){
    $('#file-upload').click();
  }

  changeProfilePicture(){
    const formData = new FormData();
    const file = document.getElementById('file-upload').files[0];
    formData.append('user[image]', file);
    this.props.updateUserProfilePicture(formData, this.props.currentUser.username);
  }

  generateEditPencil() {
    if ( this.props.user.username !== this.props.currentUser.username ) {
      return (<div />);
    }

    return (
      <div className="edit-profile-pic" onClick={ this.openDialog }>
        <input type="file" id="file-upload" onChange={ this.changeProfilePicture }/>
      </div>
    );
  }

  render(){

    if ( this.props.loading ) return <Spinner />;

    const user = this.props.user;
    const playlists = user.playlists;

    return(
      <article className="article-view">

        <div className="header-image"
          style={ { backgroundImage: `url(${ user.image_url })` } } />
        <section className="header-info">
          { this.generateEditPencil() }
          <div className="profile-picture"
            style={ { backgroundImage: `url(${ user.image_url })` } }/>
          <div className="header-details">
            <span className="view-type">User</span>
            <h1>{ user.username }</h1>
            <h2>{ user.f_name } { user.l_name }</h2>
            <h3>Member since: { (new Date(user.created_at)).toLocaleDateString() }</h3>
          </div>
        </section>

        <section className="article-main scrollable-y">

          <h2 className="article-sub-heading">Playlists</h2>
          <PlaylistsBar
            playlistsObj={ playlists }
            type={ "USER_PAGE" }
          />

        </section>

      </article>
    );

  }

}

export default User;
