import React, { Component } from 'react';
import Request from 'superagent';

class Actor extends Component{
    constructor(props) {
        super(props);
        this.state = {
          actors: [],
        };
        this.searchHandler = this.searchHandler.bind(this);
    
      }

    componentDidMount() {
        let url2 = "http://localhost:8000/kazfilm/api/v1/actor/"
        Request.get(url2).then((response) => {
          let obj2 = JSON.parse(response.text);
          console.log(obj2);
          this.setState ({
            actors: obj2
          })
        })
 
      }
    render() {
        return(
            <div>
                <h3>{this.state.actors.name}</h3>
                <p>АКТЕРЫ</p>

            </div>
        );
    }
} 

export default Actor;