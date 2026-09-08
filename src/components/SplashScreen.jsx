import { motion } from "framer-motion";

function SplashScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#D13A23]"
    >
      {/* Logo */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 z-10 flex items-center justify-center px-10"
      >
        <img
          src="/images/pratham.png"
          alt="Pratham"
          className="w-[220px] max-w-[70vw] object-contain sm:w-[280px] md:w-[340px]"
        />
      </motion.div>

      {/* Wave */}
      <motion.div
        initial={{
          y: "0%",
          scaleX: 1,
        }}
        animate={{
          y: "-105%",
          scaleX: 1.15,
        }}
        transition={{
          delay: 1.25,
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={onComplete}
        className="absolute -bottom-[18%] left-1/2 h-[120%] w-[120%] -translate-x-1/2 rounded-[0_0_50%_50%]"
        style={{
          backgroundColor: "#D13A23",
        }}
      />
    </motion.div>
  );
}

export default SplashScreen;