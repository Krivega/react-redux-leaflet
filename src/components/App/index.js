import React from 'react';
import Map from 'containers/Map';
import Layers from 'containers/Layers';
import './style.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Map />
        <Layers />
      </div>
    );
  }
}
