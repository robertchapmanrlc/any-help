import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import FacilityCard from "./FacilityCard.tsx";
import Map from "./Map.tsx";
import { data, detail } from "../../../../template.ts";
import { Place } from "../../../types/Place.ts";

const listVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      delayChildren: 1,
      staggerChildren: 0.05,
    },
  },
};

const facilityVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

function FacilityList() {
  const [open, setOpen] = useState(false);

  const facilities = data.results;
  const details = detail.result;

  const results = data.results;
  const places: Place[] = [];
  results.forEach((result) => {
    places.push({
      location: {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
      },
      name: result.name,
      open_now: result.opening_hours?.open_now,
      place_id: result.place_id,
      rating: result.rating,
      formatted_address: detail.result.formatted_address,
      formatted_phone_number: detail.result.formatted_phone_number,
      url: detail.result.url,
      website: detail.result.website,
      wheelchair_accessible_entrance:
        detail.result.wheelchair_accessible_entrance,
      open_time: detail.result.current_opening_hours.periods[0].open.time,
      close_time: detail.result.current_opening_hours.periods[0].close.time,
      img:"../../../../template.jpeg",
    });
  });

  console.log(places);

  return (
    <>
      <motion.div
        className="hidden md:flex w-[35%] h-full flex-col justify-start items-center gap-8 overflow-y-auto"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {places.map((facility, i) => (
          <motion.div
            className="w-full flex justify-center items-center"
            variants={facilityVariants}
          >
            <FacilityCard
              key={i}
              facility={facility}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="md:w-0 w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:hidden flex h-10 w-full flex-row justify-center gap-1 items-center bg-green-500 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h1 className="text-center text-white font-lexend">Show Centers</h1>
          {open ? (
            <FaAngleUp className="text-white" size={20} />
          ) : (
            <FaAngleDown className="text-white" size={20} />
          )}
        </motion.div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "15rem",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.3,
                    delay: 0.15,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
              className="w-full flex flex-col justify-start items-center gap-5 overflow-y-auto"
            >
              {places.map((facility, i) => (
                <motion.div
                  className="w-full flex flex-col items-center"
                  variants={facilityVariants}
                >
                  <FacilityCard
                    key={i}
                    facility={facility}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Map places={places}/>
    </>
  );
}

export default FacilityList;
