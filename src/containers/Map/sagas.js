import { REMOVE_ITEM_LAYERS } from 'containers/Layers/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { resetActiveLayer } from './actions';

function* resetActiveLayerSaga(action) {
  try {
    yield put(resetActiveLayer(action.data.id));
  } catch (e) {}
}

export function* handleRemoveLayer() {
  yield takeLatest(REMOVE_ITEM_LAYERS, resetActiveLayerSaga);
}
