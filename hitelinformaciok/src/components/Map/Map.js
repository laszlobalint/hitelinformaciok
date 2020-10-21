import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '../../shared/configuration';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 47.5466,
    longitude: 19.0378,
    zoom: 15,
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={47.5466} longitude={19.0378}>
          <span style={{ color: '#1976d2', fontSize: '6rem' }}>*</span>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
