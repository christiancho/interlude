import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';

class Album extends React.Component {

  componentDidMount(){
    this.props.fetchArtist(this.props.params.artistId);
    this.props.fetchAlbum(this.props.params.albumId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.albumId !== nextProps.params.albumId){
      this.props.fetchAlbum(nextProps.params.albumId);
    }
  }

  render() {
    if ( this.props.loading ) return (<Spinner />);

    const album = this.props.album;
    const artist = this.props.artist;

    return (
      <article className="album-view">
        <section className="album-header">

          <div className="header-image-cropper">
            <img src={ artist.image }/>
          </div>

          <div className="header-wrapper">
            <div className="album-cover">
              <img src={ album.image} />
            </div>
            <div className="header-details">
              <span className="view-type">Album</span>
              <h1>{ album.title }</h1>
              <h2>Artist: { artist.name }</h2>
              <h2>Year: { album.year }</h2>
            </div>
          </div>

        </section>

        <section className="album-songs">
        </section>

      </article>
    );
  }

}

export default Album;
