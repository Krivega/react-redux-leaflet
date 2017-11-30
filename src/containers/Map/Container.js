import React from 'react';
import LeafletMap from 'components/LeafletMap';
import LeafletLayer from 'components/LeafletLayer';

export default class Map extends React.PureComponent {
  handleClickMap = latlng => {
    const { activeLayerId } = this.props;

    if (activeLayerId) {
      this.props.onClickMap(latlng);
    }
  };

  handleClickMarker = id => {
    const { activeLayerId } = this.props;

    if (activeLayerId) {
      this.props.onClickMarker(id);
    }
  };

  renderLayer() {
    const { markers } = this.props;

    if (!markers || markers.length === 0) {
      return null;
    }

    return <LeafletLayer markers={markers} onClickMarker={this.handleClickMarker} />;
  }

  render() {
    const position = [51.505, -0.09];
    const zoom = 13;

    return (
      <LeafletMap position={position} zoom={zoom} onClick={this.handleClickMap}>
        {this.renderLayer()}
      </LeafletMap>
    );
  }
}
