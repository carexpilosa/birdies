let polifill = require ('babel-polyfill');

let result = async function () {
  const url = new URL('http://localhost:8000/birdies/0/1');

  //const access = cookies.getJSON('access') || {};
  try {
    let response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          //'Authorization': 'Bearer ' + access.token
        }
      }
    );
    let ret = await response.json();
    console.log('++++++++++++ ret');
    console.log(ret);
    return ret;
    /*return {
      //id: fieldId,
      //choices: result.items,
      //...result.meta,
      //...params
    };*/

  } catch (e) {
    console.log(e);
    return false;
  }
};

export function testAction(data) {
  
  return {type: TEST, data: [...data]};
}

export const TEST = 'TEST';
