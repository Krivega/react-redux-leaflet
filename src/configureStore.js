import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import createSagaMiddleware from 'redux-saga';
import { loadLayers } from 'containers/Layers/actions';
import sagas from './sagas';

export default function storeConfigure() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(sagas);

  store.dispatch(loadLayers());
  return store;
}
