import { store } from './store';

export const TEST = 'TEST',
             GET_MORE_BIRDIES = 'GET_MORE_BIRDIES',
             UPDATE_BIRDIES = 'UPDATE_BIRDIES';

export function testAction(data) {
  return {type: TEST, data: [...data]};
}

export function getNextBirdiesFromRest() {
  /*let response = '';
  let p = new Promise(function(resolve, reject) {
    response = fetchURL('http://localhost:8000/birdies/0/6');
    console.log('=====================> response');
    console.log(response);
  });

  p.then(
    //console.log('=====================> response'),
    //console.log(response),
    store.dispatch({
      type: UPDATE_BIRDIES,
      birdies: response
    })
  );*/

  fetch(
    'http://localhost:8000/birdies/5/1',
    {
      method: 'GET',
    }
  ).then(function(response) {
    console.log(response.body),
    store.dispatch({
      type: UPDATE_BIRDIES,
      birdies: response
    }
  )});
}



/*export function fetchURL(url) {
  let result = fetch(
    url,
    {
      method: 'GET',
    }
  );
  console.log('################result');
  return(result);
}*/
