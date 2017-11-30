import Leaflet from 'leaflet';

import PropTypes from 'prop-types';
import React from 'react';
import { Marker } from 'react-leaflet';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/';

export default class LeafletMarker extends React.PureComponent {
  static propTypes = {
    position: PropTypes.object,
    onClick: PropTypes.func
  };

  render() {
    const { position } = this.props;

    return <Marker position={position} onClick={this.props.onClick} />;
  }
}
