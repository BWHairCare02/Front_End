import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

// API
import { yelpApi } from "../axios/yelpapi";

// map

import ReactMapGl, { Marker, Popup } from "react-map-gl";

// components

// import SearchForm

// Image
import icon from "../../src/svg.svg";
import { LOCATION_CUSTOMErR } from "../actions";

const MapSearch = () => {
  // map token
  const mapBoxToken =
    "pk.eyJ1Ijoic2t5ZXNreWUiLCJhIjoiY2s2OHUwaHZxMDh1bjNrcG94a3o1cWgyaCJ9.-tKetgdSZIIgpXgDlIB_9A";

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "100%"
  });

  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [newLocation, setNewLocation] = useState("San Francisco,CA");

  useEffect(() => {
    yelpApi()
      .get(
        `/businesses/search?location=${newLocation}&categories=barbers&radius=16093`
      )
      .then(res => setLocations(res.data.businesses))
      .catch(error => console.log(error));
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${newLocation}.json?access_token=${mapBoxToken}`
      )
      .then(res => {
        console.log(res);
        setViewport({
          ...viewport,
          latitude: res.data.features[0].center[1],
          longitude: res.data.features[0].center[0]
        });
      })
      .catch(error => console.log(error));
  }, [newLocation]);
  return (
    <div className="search-map">
      <img
        style={{ "-webkit-user-select": "none", margin: "auto" }}
        src="https://www.cssportal.com/form-elements/images/search.png"
      ></img>
      <ReactMapGl
        {...viewport}
        className="map"
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/skyeskye/ck68ub30n0ruv1inmo6v1x9yd"
      >
        {locations.map(location => {
          return (
            <Marker
              key={location.id}
              latitude={location.coordinates.latitude}
              longitude={location.coordinates.longitude}
            >
              <button className="icon" onclick={() => setSelected(location)}>
                <img src={icon} alt="hair" className="icon" />
              </button>
            </Marker>
          );
        })}
      </ReactMapGl>
    </div>
  );
};
export default MapSearch;
/* {selected && (
                <Popup latitude={selected.coordinates.latitude}
                longitude={selected.coordinates.longitude}
                onClose={() => setSelected(null)}>
                  <PopupCard location={selected}/>  
                </Popup>

            )} */
