'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Birdies from './components/Birdies';
import reducer, {INITIAL_STATE} from './reducers';
import { store } from './store';

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
  },
  {
    id: 'melanittaNigra',
    name: 'Trauerente',
    desc: 'Kleinste und leichteste der Melanitt-Arten'
  },
  {
    id: 'falcoPeregrinus',
    name: 'Wanderfalke',
    desc: 'Schnellster Vogel: bis 360 km/h im Sturzflug'
  },
  {
    id: 'falcoSubbuteo',
    name: 'Baumfalke',
    desc: 'Erinnert an riesigen Mauersegler'
  },
  {
    id: 'limosaLimosa',
    name: 'Uferschnepfe',
    desc: 'hochbeinige, langhalsige, elegante Limikole'
  },
  {
    id: 'TringaTotanus',
    name: 'Rotschenkel',
    desc: 'Wasserläufer ohne auffallende Kennzeichen'
  },
  {
    id: 'larusArgentatus',
    name: 'Silbermöwe',
    desc: 'Bekannteste Möwe der Nordseeküste'
  }
];

ReactDOM.render(
  <Provider store={store}>
    <span>
      <Birdies birdies={birdies} />
    </span>
  </Provider>,
  document.getElementById('app')
);
