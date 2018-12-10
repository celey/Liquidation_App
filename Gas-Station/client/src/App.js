import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';

import Work from './Components/Work'
import Helper from './Components/Helper'
import Alerts from './Components/Alerts'


class App extends Component {
  
  constructor(props){
    super(props);
    let cups = localStorage.getItem('cups') || '';
    this.state = {
      data: {},
      value: cups.split(','),
      newCup: '',
      cups: []
    }
  }
  componentDidMount(){
    function getURLParameter(name){
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    this.setState({mode: getURLParameter('mode')})
    this.fetchData();

    setInterval(() => {
      if (this.state.value != []){
        this.fetchData();
      }
    }, 5000);
  }

  addCup = () => {
      var data = this.state.value;
      let input = this.state.newCup;
      data = data.splice(0,2);
      if(input != null && input !== "" && input) {
        data.reverse().push(input)
        data.reverse();
      }
      this.setState({value: data});
      localStorage.setItem('cups', data);
      this.fetchData();
  }

  handleChange=(event) => {
    this.setState({newCup: event.target.value});
  }

  fetchData = () => {
    let cups = (localStorage.getItem('cups') || '').split(',');
    this.setState({'cups': cups});
    cups.map((id) => {
    if(id != null && id != "" && id) {
      fetch(`https://settle.deonsummers.com/api/cups/${id}`,{
        method: "GET"
      })
        .then((response) => response.json())
        .then((response) => {
          let cup = response.getCup;
          response.liquidationRatio = Math.round(cup.ratio*100)/100;
          response.priceOfEth = Math.round(cup.pip*100)/100;
          response.liqudationPrice = cup.art != 0 ? Math.round(100*(cup.art*1.5)/(cup.ink*1.041))/100 : 0;
          response.cupId = cup.id;
          let data = {...this.state.data};
          data[id] = response
          this.setState({data});
          if (cup.ratio < 175 && cup.ratio != null) {
            fetch('https://jsapi.settle.finance/api/app/SendNotification',{
              method: "GET"
            })
          }
        });

    };
    });
}

  render() {
    return (

      <div className="App">
       <input type="number" id="cupInput" value={this.state.newCup} onChange={this.handleChange} />
      <button onClick={this.addCup}>Get Cup Info</button>

        {this.state.mode=='work'&&<Work cups={this.state.cups} data={this.state.data} />}
        {this.state.mode=='helper'&&<Helper cups={this.state.cups} data={this.state.data} />}
        {this.state.mode=='alerts'&&<Alerts cups={this.state.cups} data={this.state.data} />}
      </div>
    );
  }
}

export default App;
