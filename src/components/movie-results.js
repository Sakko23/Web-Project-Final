import React, { Component } from 'react';
//import Clipboard from 'clipboard';

import MovieResultRow from './movie-results-row';
//import './EmojiResults.css';
import allMovies from './movie-list.json';

class MovieResults extends Component {

  render() {
    
    return (
      <div className="component-emoji-results">
        {this.props.movies.map((movieData) =>
              <MovieResultRow
                key={movieData.title}
                id={movieData.id}
                year={movieData.year}
                title={movieData.title}
                actors={movieData.actors}
                director={movieData.director}
                img={movieData.img}
                about={movieData.about}
                videoId={movieData.videoId}
              />
          )}
      </div>
    );
  }
}
export default MovieResults;
