import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  // Center of India (roughly)
  const [mapCenter] = useState({ lat: 22.5937, lng: 78.9629 });
  const [zoom] = useState(5); // Zoomed out to show entire India
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="w-full">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <GoogleMap
            mapContainerClassName="w-full h-full"
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
            center={mapCenter}
            zoom={zoom}
            onLoad={onLoad}
          >
            <Marker position={mapCenter} />
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
