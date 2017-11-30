import { LOAD_LAYERS, SAVE_LAYER_CHANGES_LAYERS } from './constants';
import { put, select, takeLatest } from 'redux-saga/effects';
import { setLayers, setItemMarkers } from './actions';
import { getMarkers } from 'containers/Map/selectors';

function* saveLayerChangesSaga(action) {
  try {
    const markers = yield select(getMarkers);
    yield put(setItemMarkers(action.data.id, markers));
  } catch (e) {}
}

function* loadLocalLayers() {
  try {
    const layers = yield import('./layers.json');
    yield put(setLayers(layers));
  } catch (e) {}
}

export function* saveLayerChanges() {
  yield takeLatest(SAVE_LAYER_CHANGES_LAYERS, saveLayerChangesSaga);
}

export function* loadLayers() {
  yield takeLatest(LOAD_LAYERS, loadLocalLayers);
}
