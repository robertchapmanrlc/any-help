import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    y: -75,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.9,
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

const searchVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

function Header() {
  return (
    <motion.div
      className="w-full h-24 md:h-16 flex flex-col md:flex-row items-center justify-between bg-green-500 md:drop-shadow-[0_30px_15px_rgba(22,101,52,0.15)]"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-white text-2xl font-lexend md:ml-4 md:pt-0 pt-1"
        variants={titleVariants}
      >
        Find Help Nearby
      </motion.h1>
      <motion.div
        className="w-full md:w-[450px] md:mr-4 md:pb-0 flex flex-col md:flex-row justify-between items-center"
        variants={searchVariants}
      >
        <h3 className="text-white text-lg font-lexend">
          Look for other locations
        </h3>
        <input
          type="text"
          placeholder="Search here"
          className="w-[50%] opacity-40 rounded-md font-lexend py-1 px-2"
        />
      </motion.div>
    </motion.div>
  );
}

export default Header;
