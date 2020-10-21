import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import marker from '../../images/map/marker-icon.png';

const LeafletMap = (props) => (
  <div className="leaflet-container" style={{ width: '100%', height: '100%' }}>
    <Map center={[47.547, 19.034]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={marker} draggable="false" position={[47.547, 19.034]} />
    </Map>
  </div>
);

export default LeafletMap;
