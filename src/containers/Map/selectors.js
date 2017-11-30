import { createSelector } from 'reselect';
export const storeName = 'map';

export function getStore(state) {
  return state.get(storeName);
}

export const getMarkers = createSelector(getStore, store => {
  return store.get('markers');
});

export default createSelector(getStore, store => {
  const activeLayerId = store.get('activeLayerId');
  const markers = store.get('markers');

  return {
    markers: markers.toIndexedSeq().toJS(),
    activeLayerId
  };
});
