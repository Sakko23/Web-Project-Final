import React, { Component } from 'react';
import './movie-dashboard.css'
import img1 from './img/1.png'
import MovieResults from './movie-results'
import SearchInput from './search-input'
import filterList from './filter-list'
import MovieResultRow from './movie-results-row';
import Request from 'superagent';


// var movies = [
//   {
//     id: "1",
//     title: "Брат или брак",
//     img: cover1,
//     year: "2017",
//     keywords: "брат или брак комедия самые смешные смешной смешная свадьба комедии",
//     director: "Ернар Нургалиев",
//     videoId:"MB4b-QVreAk",
//     actors: "Куралай Анарбекова, Даурен Сергазин, Нурлан Сабуров, Абунасыр Сериков, Бауыржан Каптагай, Тауекел Муслим, Мурат Бисенбин, Олжас Абай",
//     about:"У каждого человека можно найти небольшой минус. У Гаухар таких минусов целых пять: это её старшие братья. Они так сильно любят свою сестрёнку, что не дают ей выйти замуж. Айдару придётся пройти самые странные испытания в его жизни, а Гаухар предстоит сделать самый сложный выбор: брат или брак? Вмешательство родственников в личные дела может иметь последствия разного плана. Гаухар в фильме «Брат или Брак?» убеждена, что семейство будет отвергать кандидатуры всех ее ухажеров. Разборчивая девушка сама способна дать фору заправской свахе, умело подыскивает вторые половинки подругам, но угодить собственной родне не в силах. Самостоятельность в выборе профессии, декора дома или хобби только приветствуется, а вот женихов должна выбирать исключительно семья. Особую роль в отпугивании поклонников играют братья красавицы. Ребята с подозрением относятся ко всем кавалерам сестры, а впоследствии деликатно избавляются от их присутствия в жизни опекаемой особы. Как угодить взыскательной семейке? То специальность библиотекаря их смешит, то увлечения байкера пугают. Презентабельные партнеры обзываются альфонсами и выгоняются прочь, а внешне благонадежные соискатели сами уносят ноги от придирчивой родни невесты. Бедняжка уже готова смириться с судьбой старой девы с вечным статусом «на выданье». Но отчаиваться поздно, ведь на горизонте появляется настоящий герой. Масса талантов вкупе с хорошими манерами, перспективами и обаянием сливаются в образ идеального мужчины. Подозревая некий подвох в неловкой ситуации, героиня сама начинает настороженно выискивать изъяны в молодом человеке. Удастся ли красавчику очаровать избранницу и ее верных стражей? Сюжет напоминает тайваньскую дораму 2009 года Сестрёнка Тао Хуа. "
//   },
//   {
//     id: "2",
//     title: "Сказ о розовом зайце",
//     img: cover2,
//     year: "2010",
//     keywords: "драма алматы мажор боевик криминал бандит боевики криминальные",
//     director: "Фархат Шарипов",
//     videoId:"J5uVYUZaAR4",
//     actors: "Ануар Нурпеисов, Максим Акбаров, Карлыгаш Мухамеджанова, Фархад Абдраимов, Бахтияр Кожа, Мурат Бисенбин, Саят Исембаев, Санжар Мади, Антон Фот, Райхан Айткожанова",
//     added: "false",
//     about:"Провинциальный парень Ерлан, студент 3 курса одного из алматинских ВУЗов. Он приехал в город в надежде добиться успеха в будущем. Среда «золотой молодежи» куда он попадает, оказалось непростой. У нее свои законы, собственные порядки, и для того, чтобы сохранить свои моральные принципы, многое придется заново пережить и испытать."

//   },
//   {
//     id: "3",
//     title: "Тараз",
//     img: cover3,
//     year: "2016",
//     keywords: "боевики криминальные казахстан юг драма тараз боевик бандит криминал рэкетир аа уу",
//     director: "Нуртас Адамбай",
//     videoId:"MJkNsD4iJeI",
//     actors: "Нуртас Адамбай, Еркебулан Даиров, Толепберген Байсакалов, Жандос Айбасов, Назар Султанбаев, Асан Мажит, Гульназ Жоланова, Камшат Жолдыбаева, Нуржан Садыбеков, Марат Абдуллаев",
//     added: "false",
//     about:"Обычный вечер в ночном клубе Тараза заканчивается конфликтом с сыном местного криминального авторитета Али. Понимая, что самые серьезные последствия данного конфликта неизбежны, друзья вынуждены бежать из города в Алматы, прихватив с собой случайную посетительницу клуба Айжан и таксиста. Каждый из них осознает, что в ближайшее время они не смогут вернуться в город, в котором осталась их повседневная жизнь и проблемы. В Алматы они пытаются раздобыть деньги, чтобы пуститься в бега дальше. Сумеют ли они осуществить свои планы до того, как их настигент погоня?"

//   },
// ];




class MovieDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:  [],
      actors: [],
      movieCast: [],
      srchText: '',
      fullOpen: true,
      myList: [],
      nextId: 0, 
    };
    this.searchHandler = this.searchHandler.bind(this);

  }

  
  componentDidMount() {
    let url = "http://localhost:8000/kazfilm/api/v1/movie/"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        movies: obj
      })
    })

  }
  searchHandler(txt) {
    this.setState({srchText: txt.target.value})
  }
  searchingFor=(txt)=> {
    return function(movie) {
      //return x.name.includes(txt); 
      if (movie.title.toLowerCase().includes(txt.toLowerCase()) || movie.keywords.toLowerCase().includes(txt.toLowerCase()) || movie.director.toLowerCase().includes(txt.toLowerCase()))
      return movie;

    }
  }
  // addMovie=(id)=>{ 
  //   let myList = this.state.myList.slice();
  //   myList.push({id: this.state.nextId});
  //   console.log(id);
  //   this.setState({
  //     myList: myList,
  //     nextId: ++this.state.nextId,
  //   });
  // }
  
  handleAddMovie = (id) => {
    console.log(id);
    
    let myList = this.state.myList.slice();
    myList.push(id);
        this.setState({
        myList: myList,
        
    });
    console.log(this.state.myList);
  };




  	render() {
      let newArr = this.state.movies.filter(this.searchingFor(this.state.srchText)).map((item) => {
        return(
              <MovieResultRow
                key={item.title}
                id={item.id}
                year={item.year}
                title={item.title}
                director={item.director}
                cover={item.cover}
                about={item.about}
                videoId={item.videoId}
                added={item.added}
                genre={item.genre}
                onAddMovie={this.handleAddMovie}
              />)
      }); 
	    return (
	      <div className="movie-dashboard">
          <div className="search-input">
            <input type="search" className="search-input"
                    onChange={this.searchHandler}
                    value={this.state.srchTxt}
                    placeholder="Поиск по фильму, жанру, актерам..."
            />
          </div>
          {newArr}
      </div>
    );
  }
}
export default MovieDashboard;









