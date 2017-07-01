import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAmv3U2SEJNl9qWpP1H7-E98bTMWosY9bk",
  authDomain: "restaurant-pricing-map.firebaseapp.com",
  databaseURL: "https://restaurant-pricing-map.firebaseio.com",
  projectId: "restaurant-pricing-map",
  storageBucket: "restaurant-pricing-map.appspot.com",
  messagingSenderId: "290077590095"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
