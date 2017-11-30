import { connect } from 'react-redux';
import selector from './selectors';
import { removeItem, changeItemName, addItem, saveLayerChanges } from './actions';
import { toggleActiveLayer } from 'containers/Map/actions';
import Container from './Container';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClickRemoveItem: id => {
      dispatch(removeItem(id));
    },
    onChangeItemName: (id, value) => {
      dispatch(changeItemName(id, value));
    },
    onAdd: value => {
      dispatch(addItem(value));
    },
    onClickItem: (id, markers) => {
      dispatch(toggleActiveLayer(id, markers));
    },
    onClickSaveChanges: id => {
      dispatch(saveLayerChanges(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
