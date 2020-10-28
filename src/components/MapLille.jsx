import React from 'react';

import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, TileLayer } from 'react-leaflet';

class MapLille extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=251&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion'
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          stations: data.records,
        });
      });
  }

  render() {
    const { stations } = this.state;
    return (
      <div>
        <h1>Lille</h1>
        <Map center={[50.6365654, 3.0635282]} zoom={14}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {stations.map((station) => (
            <Marker
              key={station.fields.nom}
              position={[
                station.geometry.coordinates[1],
                station.geometry.coordinates[0],
              ]}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default MapLille;
