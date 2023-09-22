import { data, detail } from "../../../../template.ts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

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

  return (
    <>
      <motion.div
        className="hidden md:flex w-[35%] h-full flex-col justify-start items-center gap-5 overflow-y-auto"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {facilities.map((facility) => (
          <motion.div className="flex flex-col" variants={facilityVariants}>
            <p key={facility.place_id} className="text-center font-lexend">
              {facility.name}
            </p>
            <p className="text-center font-lexend">{details.website}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="md:w-0 w-full">
        <div
          className="md:hidden flex h-10 w-full flex-row justify-center gap-1 items-center bg-green-500"
          onClick={() => setOpen(!open)}
        >
          <h1 className="text-center text-white font-lexend">Show Centers</h1>
          {open ? (
            <FaAngleUp className="text-white" size={20} />
          ) : (
            <FaAngleDown className="text-white" size={20} />
          )}
        </div>
        <div className="md:hidden h-[10rem] flex flex-col justify-start items-center gap-5 overflow-y-auto">
          {open &&
            facilities.map((facility) => (
              <motion.div className="flex flex-col" variants={facilityVariants}>
                <p key={facility.place_id} className="text-center font-lexend">
                  {facility.name}
                </p>
                <p className="text-center font-lexend">{details.website}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}

export default FacilityList;
