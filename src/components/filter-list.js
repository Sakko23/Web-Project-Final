import movieList from './movie-list.json';

export default function filterList(searchText, maxResults) {
  return movieList.filter((movie) => {
    if (movie.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (movie.year.includes(searchText)) {
      return true;
    }

    if (movie.director.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (movie.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
