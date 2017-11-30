import { v4 } from 'node-uuid';
import {
  LOAD_LAYERS,
  SET_LAYERS,
  REMOVE_ITEM_LAYERS,
  CHANGE_ITEM_NAME_LAYERS,
  ADD_ITEM_LAYERS,
  SET_ITEM_MARKERS_LAYERS,
  SAVE_LAYER_CHANGES_LAYERS
} from './constants';

export const loadLayers = () => {
  return {
    type: LOAD_LAYERS,
    data: {}
  };
};

export const setLayers = layers => {
  return {
    type: SET_LAYERS,
    data: { layers }
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM_LAYERS,
    data: { id }
  };
};

export const changeItemName = (id, value) => {
  return {
    type: CHANGE_ITEM_NAME_LAYERS,
    data: { id, value }
  };
};

export const addItem = value => {
  return {
    type: ADD_ITEM_LAYERS,
    data: { value, id: v4() }
  };
};

export const setItemMarkers = (id, markers) => {
  return {
    type: SET_ITEM_MARKERS_LAYERS,
    data: { id, markers }
  };
};

export const saveLayerChanges = id => {
  return {
    type: SAVE_LAYER_CHANGES_LAYERS,
    data: { id }
  };
};
