import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { getStore as getStoreMap } from 'containers/Map/selectors';

export const storeName = 'layers';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, getStoreMap, (store, storeMap) => {
  const activeLayerId = storeMap.get('activeLayerId');
  let hasChanges = false;

  if (activeLayerId) {
    const mapMarkers = storeMap.get('markers');
    let layerMarkers = store.find(item => item.get('id') === activeLayerId).get('markers');

    if (!layerMarkers) {
      layerMarkers = Map();
    }

    hasChanges = !mapMarkers.equals(layerMarkers);
  }

  return {
    items: store.toIndexedSeq().toArray(),
    activeLayerId,
    hasChanges
  };
});
