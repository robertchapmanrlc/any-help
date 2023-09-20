import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 41.87,
  lng: -87.62,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className="w-[65%] border flex items-center justify-center">
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-[calc(100%-5rem)] h-[calc(100%-5rem)]"
          center={center}
          zoom={10}
        ></GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Map;
