import { store } from './store';

export const TEST = 'TEST',
             GET_MORE_BIRDIES = 'GET_MORE_BIRDIES',
             UPDATE_BIRDIES = 'UPDATE_BIRDIES';

export function testAction(data) {
  return {type: TEST, data: [...data]};
}

export function _getNextBirdiesFromRest(offset, len, pageSize) {
  let request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status === 200) {
      let json;
      if(request.responseType === 'json') {
        json = request.response;
        store.dispatch({
          type: UPDATE_BIRDIES,
          data: {
            list: json.list,
            offset,
            len,
            pageSize: json.pageSize
          }
        });
      } else {
        json = JSON.parse(request.responseText);
      }

    } else {
      console.log ('request has status => ' + request.status)
    }
  };
  let url = `http://localhost:8000/birdies/${offset}/${len}`;
  request.open('GET', url);
  request.responseType = 'json';
  request.setRequestHeader('Accept', 'application/json');
  request.send();
}

export function getNextBirdiesFromRest(offset, len, pageSize) {
  let url = `http://localhost:8000/birdies/${offset}/${len}`;
  fetch(url).then(function(response) {
    // Convert to JSON
    return response.json();
  }).then(function(birdies) {
    store.dispatch({
      type: UPDATE_BIRDIES,
      data: {
        list: birdies.list,
        offset,
        len,
        pageSize: birdies.pageSize
      }
    });
  });
}
