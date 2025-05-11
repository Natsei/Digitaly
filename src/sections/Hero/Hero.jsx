import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";

const Hero = () => {
  return (
    <section className="min-h-screen relative" data-scroll-section>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Lumos — Donnez vie à votre site web
          </h1>
          <p className="font-inter text-xl text-gray-300 mb-12">
            Conception de sites web accessibles, beaux et efficaces
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg"
          >
            Découvrir nos formules
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowDown className="text-white text-4xl animate-bounce" />
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="flower-animation" />
      </div>
    </section>
  );
};

export default Hero;