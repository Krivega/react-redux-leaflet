import { all } from 'redux-saga/effects';
import { loadLayers, saveLayerChanges } from 'containers/Layers/sagas';
import { handleRemoveLayer } from 'containers/Map/sagas';

export default function* sagas() {
  yield all([loadLayers(), saveLayerChanges(), handleRemoveLayer()]);
}
