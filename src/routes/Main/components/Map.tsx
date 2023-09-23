import { motion } from "framer-motion";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { LiaDirectionsSolid } from "react-icons/lia";


import { useState } from "react";
import { Place } from "../../../types/Place";

const center = {
  lat: 41.87,
  lng: -87.62,
};

const mapVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};

interface MapProps {
  places: Place[];
}

function Map ({ places }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <motion.div
      className="w-full md:w-[65%] h-full flex items-center justify-center"
      variants={mapVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-[90%] h-[90%] rounded-xl"
          center={center}
          zoom={10}
        >
          {places.map((place, i) => (
            <MarkerF
              key={i}
              position={{
                lat: place.location.lat,
                lng: place.location.lng,
              }}
              icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              onMouseOver={() => {
                place === selectedPlace
                  ? setSelectedPlace(null)
                  : setSelectedPlace(place);
              }}
            />
          ))}
          {selectedPlace && (
            <InfoWindowF
              position={{ lat: selectedPlace.location.lat, lng: selectedPlace.location.lng }}
              zIndex={1}
              options={{ pixelOffset: { width: 0, height: -40 } }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-black text-center font-lexend">{selectedPlace.name}</p>
                <a href={selectedPlace.url} className="ml-2"><LiaDirectionsSolid size={20}/></a>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
}

export default Map;
