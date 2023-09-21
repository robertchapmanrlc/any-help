import { data, detail } from "../../../../template.ts";
import { motion } from "framer-motion";

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
  console.log(data.results);

  const facilities = data.results;
  const details = detail.result;

  return (
    <motion.div
      className="w-full md:w-[35%] overflow-y-auto flex flex-col items-center align-top gap-5"
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
  );
}

export default FacilityList;
