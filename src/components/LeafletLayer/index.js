import React from 'react';
import PropTypes from 'prop-types';
import LeafletMarker from 'components/LeafletMarker';

export default class LeafletLayer extends React.PureComponent {
  static propTypes = {
    markers: PropTypes.arrayOf(PropTypes.object),
    onClickMarker: PropTypes.func
  };

  renderItemMarker = ({ latlng, id }, index) => {
    return (
      <LeafletMarker key={id} position={latlng} onClick={this.props.onClickMarker.bind(this, id)} />
    );
  };

  render() {
    const { markers } = this.props;

    return <div>{markers ? markers.map(this.renderItemMarker) : null}</div>;
  }
}
