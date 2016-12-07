import React from 'react';
import Spinner from '../spinner';

class Artist extends React.Component {

  componentWillMount(){
    this.props.fetchArtist(this.props.params.artistId);
  }

  componentDidMount(){

  }

  render() {
    if ( this.props.loading ) return (<Spinner />);

    const artist = this.props.artist;

    return(
      <article className="artist-view">
        <div className="header-image-cropper">
          <img src={ artist.image }/>
        </div>
        <div className="header-wrapper">
          <div className="profile-picture-cropper">
            <img src={ artist.image }/>
          </div>
          <h1>{ artist.name }</h1>
        </div>
        <p className="artist-bio">{ artist.bio }</p>
      </article>
    );
  }

}

export default Artist;
