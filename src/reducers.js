import { combineReducers } from 'redux-immutable';
import mapReducer from 'containers/Map/reducer';
import layersReducer from 'containers/Layers/reducer';

export default combineReducers({
  ...mapReducer,
  ...layersReducer
});
