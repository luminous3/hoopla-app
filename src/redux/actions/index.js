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
    items: json.data,
    receivedAt: Date.now()
  };
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    return fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=o0WkAgsV8Yu0S7pjGI1Bk594LxB49hGF&limit=10&rating=G`
    )
      .then(response => response.json())
      .then(json => {
        dispatch(receiveItems(json));
      });
  };
}
