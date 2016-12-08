import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';

class Artist extends React.Component {

  componentDidMount(){
    this.props.fetchArtist(this.props.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId){
      this.props.fetchArtist(nextProps.params.artistId);
    }
  }

  generateAlbumList(albums) {

    const albumList = albums.map( (album, index) => {
      return (
        <li key={ index }>
          <Link to={ `artists/${this.props.params.artistId}/albums/${album.id}` }>
            <img src={ album.image } className="album-list-image" />
            <h3>{ album.title }</h3>
          </Link>
        </li>
      );
    });

    return (
      <ul className="album-list">
        { albumList }
      </ul>
    );
  }

  render() {
    if ( this.props.loading ) return (<Spinner />);

    const artist = this.props.artist;
    return(
      <article className="artist-view">
        <section className="artist-header">

          <div className="header-image-cropper">
            <img src={ artist.image }/>
          </div>

          <div className="header-wrapper">
            <div className="profile-picture-cropper">
              <img src={ artist.image }/>
            </div>
            <div className="header-details">
              <span className="view-type">Artist</span>
              <h1>{ artist.name }</h1>
            </div>
          </div>

        </section>

        <section className="artist-albums">
          { this.generateAlbumList( artist.albums ) }
        </section>

        <section className="artist-song">
        </section>

      </article>
    );
  }

}

export default Artist;
