import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

export default class LeafletMap extends React.PureComponent {
  static propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
    onClick: PropTypes.func
  };

  handleClick = event => {
    this.props.onClick(event.latlng);
  };

  render() {
    const { position, zoom } = this.props;

    return (
      <Map center={position} zoom={zoom} onClick={this.handleClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {this.props.children}
      </Map>
    );
  }
}
