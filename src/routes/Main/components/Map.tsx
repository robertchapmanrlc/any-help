import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { motion } from "framer-motion";

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
      duration: 0.6
    }
  }
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <motion.div
      className="w-full md:w-[65%] md:h-full flex items-center justify-center"
      variants={mapVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-[90%] h-[90%] rounded-xl"
          center={center}
          zoom={10}
        ></GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
}

export default Map;
