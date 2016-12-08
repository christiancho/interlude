import React from 'react';
import Spinner from '../spinner';

import { Link, withRouter } from 'react-router';

class Browse extends React.Component{

  componentDidMount(){
    this.props.fetchArtists();
  }

  artistsList() {

    return Object.values(this.props.artists).map( ( artist, index ) => {
      return (
        <li className="artist-box" key={ index }>
          <Link to={ `artists/${artist.id}` } className="artist-link">
            <img src={ artist.image_url } />
            <h2>{ artist.name }</h2>
          </Link>
        </li>
      );
    });

  }

  render(){
    if (this.props.loading) return (<Spinner />);

    const artistsList = 0;

    return(
      <section className="browse">
        <h1>Browse Artists</h1>
        <ul className="artists-list">
          { this.artistsList() }
        </ul>
      </section>
    );
  }

}

export default withRouter(Browse);
