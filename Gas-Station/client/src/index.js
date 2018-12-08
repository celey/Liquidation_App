
import React from 'react';
import ReactDOM from 'react-dom';
import gql from "graphql-tag";

// Components
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// Style
import './index.css';
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "graphql.makerdao.com/v1"
});




ReactDOM.render(
<div>
    <div>
      <App />
    </div>
</div>, document.getElementById('root'));

registerServiceWorker();
