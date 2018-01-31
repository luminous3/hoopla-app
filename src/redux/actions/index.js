import fetch from 'cross-fetch';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

function requestItems() {
  return {
    type: REQUEST_ITEMS
  };
}

function receiveItems(json) {
  return {
    type: RECEIVE_ITEMS,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    const init = {};
    return fetch(
      `https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7`,
      {
        headers: {
          'ws-api': '2.1'
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(receiveItems(json));
      });
  };
}
