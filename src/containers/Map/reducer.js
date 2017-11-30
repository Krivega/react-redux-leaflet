import { Map } from 'immutable';

import {
  TOGGLE_ACTIVE_LAYER_MAP,
  ADD_MARKER_MAP,
  REMOVE_MARKER_MAP,
  RESET_ACTIVE_LAYER_MAP
} from './constants';
import { storeName } from './selectors';

const initialState = Map({
  markers: Map()
});

function resetActiveLayer(state, { id }) {
  if (state.get('activeLayerId') === id) {
    state = state.delete('activeLayerId').set('markers', Map());
  }

  return state;
}

function toggleActiveLayer(state, { id, markers }) {
  if (state.get('activeLayerId') === id) {
    state = state.delete('activeLayerId').set('markers', Map());
  } else {
    state = state.set('activeLayerId', id).set('markers', Map(markers));
  }

  return state;
}

function addMarker(state, { latlng }) {
  const idMarker = `${latlng.lat}${latlng.lng}`;

  state = state.updateIn(['markers', idMarker], item => {
    if (!item) {
      item = Map({ id: idMarker });
    }

    return item.set('latlng', Map(latlng));
  });

  return state;
}

function removeMarker(state, { id }) {
  return state.deleteIn(['markers', id]);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_ACTIVE_LAYER_MAP:
        return toggleActiveLayer(state, action.data);
      case ADD_MARKER_MAP:
        return addMarker(state, action.data);
      case REMOVE_MARKER_MAP:
        return removeMarker(state, action.data);
      case RESET_ACTIVE_LAYER_MAP:
        return resetActiveLayer(state, action.data);
      default:
        return state;
    }
  }
};
