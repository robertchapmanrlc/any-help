import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  hiddenRight: {
    x: "20%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-20%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
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
  hover: {
    scale: 1.2,
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

type direction = "left" | "right";

function Welcome() {
  const [messagesIndex, setMessagesIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<direction>("left");

  const handleNext = () => {
    setSlideDirection("right");
    setMessagesIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrevious = () => {
    setSlideDirection("left");
    setMessagesIndex((prevIndex) => prevIndex - 1);
  };

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
        <div className="w-full h-[50%] flex flex-col items-center justify-center">
          <motion.h1
            className="md:text-4xl lg:text-5xl text-center text-white font-lexend"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Any Help
          </motion.h1>
          <div className="w-[65%] min-h-[90px] mt-8">
            <AnimatePresence>
              <motion.p
                key={messagesIndex}
                className="text-white text-center text-lg font-lexend"
                variants={welcomeVariants}
                initial={
                  slideDirection === "right" ? "hiddenRight" : "hiddenLeft"
                }
                animate="visible"
                exit="exit"
              >
                {messages[messagesIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-[25%] flex flex-row items-center justify-between">
          <motion.button
            className="bg-white rounded-full p-1 hover:bg-white/80 disabled:bg-white/40"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={messagesIndex !== 0 ? "hover" : ""}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            disabled={messagesIndex === 0}
          >
            <FaAngleLeft className="text-green-500" size={30} />
          </motion.button>
          <motion.button
            className="bg-white rounded-full p-1 hover:bg-white/80 disabled:bg-white/40"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
          >
            {messagesIndex === messages.length - 1 ? (
              <Link to="/main">
                <FaAngleRight className="text-green-500" size={30} />
              </Link>
            ) : (
              <FaAngleRight className="text-green-500" size={30} />
            )}
          </motion.button>
        </div>
      </motion.div>

      <div className="md:hidden w-full h-full bg-green-500 flex flex-col items-center justify-center">
        <div className="w-full h-[50%] flex flex-col items-center justify-center">
          <motion.h1
            className="text-3xl text-center text-white font-lexend"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Any Help
          </motion.h1>
          <div className="w-[75%] min-h-[150px] mt-8">
            <AnimatePresence>
              <motion.p
                key={messagesIndex}
                className="text-white text-center text-lg font-lexend"
                variants={welcomeVariants}
                initial={
                  slideDirection === "right" ? "hiddenRight" : "hiddenLeft"
                }
                animate="visible"
                exit="exit"
              >
                {messages[messagesIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-[25%] flex flex-row items-center justify-between">
          <motion.button
            className="bg-white rounded-full p-1 hover:bg-white/80 disabled:bg-white/40"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={messagesIndex !== 0 ? "hover" : ""}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            disabled={messagesIndex === 0}
          >
            <FaAngleLeft className="text-green-500" size={30} />
          </motion.button>
          <motion.button
            className="bg-white rounded-full p-1 hover:bg-white/80 disabled:bg-white/40"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
          >
            {messagesIndex === messages.length - 1 ? (
              <Link to="/main">
                <FaAngleRight className="text-green-500" size={30} />
              </Link>
            ) : (
              <FaAngleRight className="text-green-500" size={30} />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
