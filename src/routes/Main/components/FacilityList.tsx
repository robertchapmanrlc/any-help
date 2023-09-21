import { data, detail } from "../../../../template.ts";
import { motion } from "framer-motion";
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
  const [open, setOpen] = useState(true);

  const facilities = data.results;
  const details = detail.result;

  return (
    <motion.div
      className={`w-full md:w-[35%] md:h-full h-[${
        open ? `50%` : `5%`
      }] flex flex-col items-end`}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`md:hidden w-full h-[${
          open ? `10%` : `100%`
        }] flex flex-row justify-end`}
      >
        <button onClick={() => setOpen(!open)} className="mr-4">
          {open ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
        </button>
      </div>
      <div
        className={`w-full md:flex ${
          open ? `h-[90%]` : `hidden`
        } md:h-full flex flex-col items-center align-top overflow-y-auto gap-5`}
      >
        {facilities.map((facility) => (
          <motion.div className="flex flex-col" variants={facilityVariants}>
            <p key={facility.place_id} className="text-center font-lexend">
              {facility.name}
            </p>
            <p className="text-center font-lexend">{details.website}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default FacilityList;
