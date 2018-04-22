
import React, { Component } from 'react';
import './App.css';
import MovieDashboard from './components/movie-dashboard'
import MyList from './components/mylist'
import Login from './components/login'
import Actor from './components/actors'
import back from './components/img/1.png'
import Request from 'superagent';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
const Home = () =>(
  <div>
    <h1>KAZFILM</h1>
  </div>
)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: null,
      password: "",
      logged: false
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.loginFailed = this.loginFailed.bind(this);

} 

  componentDidMount(){
    let url = "http://localhost:8000/kazfilm/api/v1/user/"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      
      this.setState ({
        users: obj
      })
    })
  }

  loginFailed(){
  
    console.log("LOGIN FAILED!")
  }
  userCheck=(txt)=> {
    return function(user) {
      if (user.name == txt.toLowerCase())
      return user;

    }
  }
  signIn(user, pass) {
      let newArr = this.state.users.filter(this.userCheck(user));
      if(newArr[0] != null){
        console.log(newArr[0].name);
        if(newArr[0].password == pass){
          console.log("SUCCESSFULLY LOGGED IN");
          this.setState({
            username: user,
            logged: true
          });
        }
      }
  /*  
      this.setState({
        username: user,
        password: pass,
        logged: true
      });
      console.log(this.state.username)
    }
    */
  }
  



  signOut() {
    this.setState({username: null, password: "", logged: false})
  }

  render() {
    if (!this.state.logged){
      return (
        <div >
          <Router>
            <div>
              <div id="top"/>
                <div id="nav"> 
                <ul id="top_layer">
                  <li><Link to='/'>Домашняя страница</Link></li>
                  <li><Link to='/movie-dashboard'>Фильмы</Link></li>
                  <li><Link to='/actors'>Актеры</Link></li>
                </ul>
                </div>
                    <Login 
                      className="logreg"
                      signIn = {this.signIn}
                      signOut = {this.signOut}
                      
                    />


            <hr/>
            <Route path='/' component={Home} />
            <Route path='/movie-dashboard' component={MovieDashboard} />
            <Route path='/mylist' component={MyList} />
            </div>
          </Router>

        </div>


      );
    }
    else{
      return (
        <div >
          <Router>
            <div>
              <div id="top"/>
                <div id="nav"> 
                <ul id="top_layer">
                  <li><Link to='/'>Домашняя страница</Link></li>
                  <li><Link to='/movie-dashboard'>Фильмы</Link></li>
                  
                  <li><Link to='/actors'>Актеры</Link></li>
                </ul>
                </div>
                  <div id="welcome">
                    <h1 > Добро пожаловать, {this.state.username} </h1>
                    <button className="inp" id="btn"  onClick={()=> this.signOut()}>Выход</button>
                  </div>

            <hr/>
            <Route path='/' component={Home} />
            <Route path='/movie-dashboard' component={MovieDashboard} />
            <Route path='/actors' component={Actor} />
            </div>
          </Router>

        </div>


      );
    }
  }
}

export default App;
