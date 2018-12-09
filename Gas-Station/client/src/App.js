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
    this.state = {
      data: {},
    value: localStorage.getItem("CupId") | ''
    }
  }
  componentDidMount(){
    function getURLParameter(name){
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    this.setState({mode: getURLParameter('mode')})



    if (this.state.value != ""){
      this.fetchData();
    }
  }
  handleChange=(event) => {
    this.setState({value: event.target.value});
    localStorage.setItem("CupId", event.target.value);
  }
  fetchData = () => {

    fetch(`http://localhost:9001/cups/${this.state.value}`,{
      method: "GET"
    })
    .then((response) => response.json())
    .then((response) => {
      let cup = response.getCup;
      response.liquidationRatio = Math.round(cup.ratio*100)/100;
      response.priceOfEth = Math.round(cup.pip*100)/100;
      response.liqudationPrice = Math.round(100*(cup.art*1.5)/(cup.ink*1.041))/100;
      response.cupId = cup.id;
      this.setState({data: response});
if (cup.ratio < 175) {
  fetch('https://jsapi.settle.finance/api/app/SendNotification',{
  method: "GET"
})
}

    });
}

  render() {
    return (

      <div className="App">
       <input type="number" value={this.state.value} onChange={this.handleChange} />
      <button onClick={this.fetchData}>Get Cup Info</button>

        {this.state.mode=='work'&&<Work data={this.state.data} />}
        {this.state.mode=='helper'&&<Helper data={this.state.data} />}
        {this.state.mode=='alerts'&&<Alerts data={this.state.data} />}
      </div>
    );
  }
}

export default App;
