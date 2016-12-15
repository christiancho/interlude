import React from 'react';
import Spinner from '../spinner';

import { Link, withRouter } from 'react-router';

class Browse extends React.Component{

  componentDidMount(){
    this.props.fetchArtists();
  }

  artistsList() {

    const values = Object.keys(this.props.artists).map( key => {
      return this.props.artists[key];
    });

    return values.map( ( artist, index ) => {
      return (
        <li className="artist-box" key={ index }>
          <Link to={ `artists/${artist.id}` } className="artist-link">
            <div className="artist-box-link"
              style={ { backgroundImage: `url(${artist.image_url})` } }>
              <h2>{ artist.name }</h2>
            </div>
          </Link>
        </li>
      );
    });

  }

  render(){
    if (this.props.loading) return (<Spinner />);

    const artistsList = 0;

    return(
      <section className="main-container browse">
        <h1>Browse Artists</h1>
        <ul className="artists-list">
          { this.artistsList() }
        </ul>
      </section>
    );
  }

}

export default withRouter(Browse);
