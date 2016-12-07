import React from 'react';

class Artist extends React.Component {

  componentWillMount(){
    this.props.fetchArtist(this.props.params.artistId);
  }

  render() {
    if ( this.props.loading ) return (<br/>);
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
        <p>{ artist.bio }</p>
      </article>
    );
  }

}

export default Artist;
