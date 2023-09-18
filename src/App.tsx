import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const headerVariants = {
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

const welcomeVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.9,
    },
  },
};

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

const messages = [
  "We live in very trying times",
  "Mental health services are becoming more and more important",
  "Sometimes you may need help from a mental hospital",
  "Mental hospitals are facilities dedicated to mental health care",
  "If you have a severe condition or don't feel safe in your current situation, a mental hospital may be able to help you",
  "We're here to help you find one tailored to your needs",
];

function App() {
  const [completion, setCompletion] = useState(0);

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
        <div className="w-full h-[65%] flex flex-col items-center justify-center">
          <motion.h1
            className="md:text-4xl lg:text-5xl text-center text-white font-lexend"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Any Help
          </motion.h1>
            <div className="w-[65%] min-h-[75px] mt-10">
              <motion.p
                className="text-white text-center text-xl font-lexend"
                variants={welcomeVariants}
                initial="hidden"
                animate="visible"
              >
                {messages[completion]}
              </motion.p>
            </div>
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
          onClick={() => setCompletion((prev) => prev + 1)}
        >
          <FaAngleRight className="text-green-500" size={30} />
        </motion.button>
      </motion.div>

      <div className="md:hidden w-full h-full bg-green-500 flex flex-col items-center justify-center">
        <div className="w-full h-[55%] flex flex-col items-center justify-center">
          <motion.h1
            className="text-3xl text-center text-white font-lexend"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Any Help
          </motion.h1>
          <div className="w-[75%] min-h-[100px] mt-5">
            <motion.p
              className="text-white text-center text-lg font-lexend"
              variants={welcomeVariants}
              initial="hidden"
              animate="visible"
            >
              {messages[completion]}
            </motion.p>
          </div>
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
          onClick={() => setCompletion((prev) => prev + 1)}
        >
          <FaAngleRight className="text-green-500" size={30} />
        </motion.button>
      </div>
    </div>
  );
}

export default App;
