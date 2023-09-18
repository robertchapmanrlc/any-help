import { motion } from "framer-motion";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="w-full h-full md:h-[70%] md:w-[75%] bg-green-500 md:rounded-3xl flex items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.9
        }}
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-lexend"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{
            delay: 0.5,
            duration: 0.9
          }}
        >
          Welcome to Any Help
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default App;
