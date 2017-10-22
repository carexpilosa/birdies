'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Birdies from './components/Birdies';
import reducer from './reducers';

let birdies = [
  {
    id: 'turdusMerula',
    name: 'Amsel',
    desc: 'Schwarzes Vögelchen'},
  {
    id: 'turdusPhilomelos',
    name: 'Sing-Drossel',
    desc: 'Gesprenkelte Drossel'
  },
  {
    id: 'fringillaCoelebs',
    name: 'Buch-Fink',
    desc: 'Häufigster Vogel Deutschlands'
  },
  {
    id: 'sturnusVulgaris',
    name: 'Star',
    desc: 'Feind der Winzer und Obstbauern, spektakuläre Flugmanöver von Schwärmen'
  },
  {
    id: 'corvusCorone',
    name: 'Aas-Krähe',
    desc: 'Nebel- und Raben-Krähe sind Unterarten'
  },
  {
    id: 'dendrocoposMajor',
    name: 'Bunt-Specht',
    desc: 'häufigster Specht'
  }
];

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <span>
      <Birdies birdies={birdies} />
    </span>
  </Provider>,
  document.getElementById('app')
);
