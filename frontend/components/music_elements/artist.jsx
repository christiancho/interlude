import React from 'react';
import Spinner from '../spinner';

class Artist extends React.Component {

  componentDidMount(){
    this.props.fetchArtist(this.props.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId){
      this.props.fetchArtist(nextProps.params.artistId);
    }
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
            <h1>{ artist.name }</h1>
          </div>
        </section>

        <section className="artist-albums">

        </section>

        <section className="artist-song">

        </section>

      </article>
    );
  }

}

export default Artist;
