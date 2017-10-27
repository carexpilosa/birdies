import { store } from './store';

export const TEST = 'TEST',
             GET_MORE_BIRDIES = 'GET_MORE_BIRDIES',
             UPDATE_BIRDIES = 'UPDATE_BIRDIES';

export function testAction(data) {
  return {type: TEST, data: [...data]};
}

export function _getNextBirdiesFromRest() {
  fetch(
    'http://localhost:8000/birdies/5/2',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      //body: JSON.stringify({})
    }
  ).then(function(response) {
    store.dispatch({
      type: UPDATE_BIRDIES,
      birdies: response.json
    }
  )}).catch(function(error) {
    console.log(`ERROR OCCURED => ${error}`);
  });
}

export function getNextBirdiesFromRest() {
  let request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status === 200) {
      let json;
      if(request.responseType === 'json') {
        json = request.response;
        console.log('UPDATE_BIRDIES = > ');
        console.log(json);
        store.dispatch({
          type: UPDATE_BIRDIES,
          birdies: json
        });
      } else {
        json = JSON.parse(request.responseText);
      }

    } else {
      console.log ('request has status => ' + request.status)
    }
  };
  request.open('GET', 'http://localhost:8000/birdies/5/2');
  request.responseType = 'json';
  request.setRequestHeader('Accept', 'application/json');
  request.send();
}

//####################
function get(url) {
  console.log('Making fetch() request to: ' + url);

  let promise = new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          response.json().then(obj => {
            resolve(obj);
          }, error => {
            reject(new ResponseError('Invalid JSON: ' + error.message));
          });
        } else if (contentType.includes('text/html')) {
          response.text().then(html => {
            resolve({
              page_type: 'generic',
              html: html
            });
          }, error => {
            reject(new ResponseError('HTML error: ' + error.message));
          });
        } else {
          reject(new ResponseError('Invalid content type: ' + contentType));
        }
      } else {
        if (response.status == 404) {
          reject(new NotFoundError('Page not found: ' + url));
        } else {
          reject(new HttpError('HTTP error: ' + response.status));
        }
      }
    }, error => {
      reject(new NetworkError(error.message));
    });
  });

  return promise;
}
