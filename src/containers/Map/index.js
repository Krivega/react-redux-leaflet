import { connect } from 'react-redux';
import selector from './selectors';
import Container from './Container';
import { addMarker, removeMarker } from './actions';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClickMap: latlng => {
      dispatch(addMarker(latlng));
    },
    onClickMarker: id => {
      dispatch(removeMarker(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
