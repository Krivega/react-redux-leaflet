import { fromJS, Map } from 'immutable';

import {
  SET_LAYERS,
  CHANGE_ITEM_NAME_LAYERS,
  REMOVE_ITEM_LAYERS,
  ADD_ITEM_LAYERS,
  SET_ITEM_MARKERS_LAYERS
} from './constants';
import { storeName } from './selectors';

const initialState = Map();

function setLayers(state, { layers }) {
  return fromJS(layers);
}

function changeItemName(state, { id, value }) {
  return state.setIn([id, 'name'], value);
}

function removeItem(state, { id }) {
  return state.deleteIn([id]);
}

function addItem(state, { id, value }) {
  return state.setIn([id], Map({ id, name: value }));
}

function setItemMarkers(state, { id, markers }) {
  return state.setIn([id, 'markers'], markers);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case SET_LAYERS:
        return setLayers(state, action.data);
      case CHANGE_ITEM_NAME_LAYERS:
        return changeItemName(state, action.data);
      case REMOVE_ITEM_LAYERS:
        return removeItem(state, action.data);
      case ADD_ITEM_LAYERS:
        return addItem(state, action.data);
      case SET_ITEM_MARKERS_LAYERS:
        return setItemMarkers(state, action.data);
      default:
        return state;
    }
  }
};
