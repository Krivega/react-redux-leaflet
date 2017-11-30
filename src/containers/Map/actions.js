import {
  TOGGLE_ACTIVE_LAYER_MAP,
  ADD_MARKER_MAP,
  REMOVE_MARKER_MAP,
  RESET_ACTIVE_LAYER_MAP
} from './constants';

export const toggleActiveLayer = (id, markers) => {
  return {
    type: TOGGLE_ACTIVE_LAYER_MAP,
    data: { id, markers }
  };
};

export const addMarker = latlng => {
  return {
    type: ADD_MARKER_MAP,
    data: { latlng }
  };
};

export const removeMarker = id => {
  return {
    type: REMOVE_MARKER_MAP,
    data: { id }
  };
};

export const resetActiveLayer = id => {
  return {
    type: RESET_ACTIVE_LAYER_MAP,
    data: { id }
  };
};
