import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#18110d]"
    >
      {/* =====================================================
          HERO BACKGROUND
          Desktop / Laptop / Tablet → hero.png
          Phone → mobile.png
      ====================================================== */}

      <motion.picture
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 block h-full w-full"
      >
        {/* ONLY PHONES */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/mobile.png"
        />

        {/* TABLETS + LAPTOPS + DESKTOP */}
        <img
          src="/images/hero.png"
          alt="Pratham spices and authentic Indian ingredients"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </motion.picture>

      {/* =====================================================
          DESKTOP / TABLET OVERLAY
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#18110d]/95 via-[#18110d]/55 to-transparent"
      />

      {/* =====================================================
          MOBILE OVERLAY
          Slightly stronger because the mobile composition
          is more visually dense.
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#18110d]/85 via-[#18110d]/30 to-[#18110d]/25 md:hidden" />

      {/* Bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#E3482F]"
          >
            <span className="h-px w-8 bg-[#E3482F]" />

            Authentic Indian Flavours
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-8xl"
          >
            Taste the

            <span className="block text-[#E3482F]">
              soul of spice.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.95,
            }}
            className="mt-6 max-w-lg text-base leading-7 text-[#F6EFE1]/70 sm:text-lg"
          >
            Carefully crafted spices and authentic ingredients
            that bring bold Indian flavours into every kitchen.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.1,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group flex items-center gap-3 rounded-full bg-[#E3482F] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F05A3F] hover:shadow-xl"
            >
              Explore our spices

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </a>

            <a
              href="#story"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#F6EFE1] backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              Our story
            </a>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#story"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.6,
        }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#F6EFE1]/60 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FiArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;