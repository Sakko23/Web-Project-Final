import React, { Component } from 'react';
import './movie-results-row.css';
import YouTube from 'react-youtube';
import Button from 'material-ui/Button';
import movieList from './movie-list.json';
class MovieResultsRow extends Component {
  constructor(props){
    super(props);

    this.state = {
      fullView: false,

    };
    this.handleMore = this.handleMore.bind(this);      
    this.handleWatch = this.handleWatch.bind(this);  
  }  

  handleMore(){
    if (this.state.fullView)
      this.setState({fullView: false});
    else
      this.setState({fullView: true});
  }
  handleWatch(){
    if (this.state.fullView)
      this.setState({fullView: false});
    else
      this.setState({fullView: true});
  }
  
  removeMyList(id){
    this.setState({
      myList: this.state.myList.filter((movie, idex)=>movie.id !== id),

    })
  }

  handleAddMovie = () => {
    this.props.onAddMovie(this.props.id);
  }


  render() {

    if (!this.state.fullView){
      return (
        <div className="component-movie-result-row">

          <img className="coverArt" src={this.props.cover} alt='Нет картинки'/>
          <h1 className="title">{this.props.title}</h1>
          <p>Жанр: {this.props.genre}</p>
          <p>Год выпуска: {this.props.year}</p>
          <p>Режиссер: {this.props.director}</p>
          <p>Актеры:{this.props.actors}</p>
          <div className="btns">
            <Button className="moreBtn" onClick={this.handleMore}>Подробнее</Button>
            
            <Button className="watchBtn" onClick={this.handleAddMovie}>Буду смотреть</Button>
          </div>
        </div>      
      );        
    }
    else{
      return (
        <div className="component-movie-result-row2" >
          <img className="coverArt" src={this.props.cover}/>
          <h1 className="title">{this.props.title}</h1>
          <p>>Жанр: {this.props.genre}</p>
          <p>Год выпуска: {this.props.year}</p>
          <p>Режиссер: {this.props.director}</p>
          <p>Актеры:{this.props.actors}</p>
          <br/><br/><br/>
          <h2>Трейлер фильма</h2>
          <YouTube className="trailer" videoId={this.props.videoId}/>
          <br/><br/>

          <p><b>  Описание фильма: </b>{this.props.about}</p>
          <div className="btns">
            <Button className="moreBtn" primary="true" onClick={this.handleMore}>Скрыть</Button>
            
            <Button className="watchBtn" onClick={this.handleAddMovie}>Буду смотреть</Button>
          </div>
        </div>      
      );  
    }
  }
}
export default MovieResultsRow;
