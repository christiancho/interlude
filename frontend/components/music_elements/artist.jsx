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
          <Link to={ `artists/${this.props.params.artistId}/albums/${ album.id }` }>
            <div className="album-list-link"
              style={ { backgroundImage: `url(${ album.image_url })` } } >
              <h3>{ album.title }</h3>
            </div>
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
      <article className="article-view">

        <div className="header-image"
          style={ { backgroundImage: `url(${ artist.image_url })` } } />
        <section className="header-info">
          <div className="profile-picture"
            style={ { backgroundImage: `url(${ artist.image_url })` } } />
          <div className="header-details">
            <span className="view-type">Artist</span>
            <h1>{ artist.name }</h1>
          </div>
        </section>

        <section className="article-main scrollable-y">

          <h2 className="article-sub-heading">Albums</h2>
          <section className="artist-albums scrollable-x">
            { this.generateAlbumList( artist.albums ) }
          </section>

          <h2 className="article-sub-heading">Songs</h2>
          <section className="artist-song">
          </section>

        </section>

      </article>
    );
  }

}

export default Artist;
