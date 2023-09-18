import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="hidden w-full h-full md:h-[70%] md:w-[75%] bg-green-500 md:rounded-3xl md:flex flex-col items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.9,
        }}
      >
        <div className="w-full h-[65%] flex items-center justify-center">
          <motion.h1
            className="md:text-4xl lg:text-5xl text-center text-white font-lexend"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
            }}
          >
            Welcome to Any Help
          </motion.h1>
        </div>
        <motion.button
          className="bg-white rounded-full p-1 hover:bg-white/70"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaAngleRight className="text-green-500" size={30} />
        </motion.button>
      </motion.div>
      <div className="md:hidden w-full h-full bg-green-500 flex flex-col items-center justify-center">
        <div className="w-full h-[55%] flex items-center justify-center">
          <motion.h1
            className="text-3xl text-center text-white font-lexend"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
            }}
          >
            Welcome to Any Help
          </motion.h1>
        </div>
        <motion.button
          className="bg-white rounded-full p-1 hover:bg-white/70"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaAngleRight className="text-green-500" size={30} />
        </motion.button>
      </div>
    </div>
  );
}

export default App;
