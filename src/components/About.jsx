import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#18110d] py-28 sm:py-36 lg:py-44"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#D13A23]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#D13A23]" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
            About PrathamSwad
          </span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* Main Statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-8xl"
            >
              Great cooking
              <span className="block text-[#D13A23]">
                begins here.
              </span>
            </motion.h2>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 max-w-xl"
            >
              <p className="text-lg leading-8 text-[#B9A99A] sm:text-xl">
                At PrathamSwad, we believe that great cooking
                begins with ingredients you can value for their
                authenticity, flavour and everyday versatility.
              </p>

              <p className="mt-6 text-base leading-7 text-[#B9A99A]/70">
                From Indian spices and blended masalas to desi ghee,
                tea and dry fruits — our range is inspired by the
                rich culinary traditions of India.
              </p>
            </motion.div>
          </div>

          {/* Visual / Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Outer ring */}
            <div className="relative aspect-square rounded-full border border-[#F6EFE1]/10 p-5">

              {/* Inner circle */}
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#D13A23] p-10 text-center shadow-2xl">

                <div>
                  <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-[#F6EFE1]/70">
                    Our belief
                  </span>

                  <h3 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F6EFE1] sm:text-5xl">
                    Shudh Bhi,
                    <span className="block text-[#E2A52C]">
                      Swad Bhi.
                    </span>
                  </h3>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -right-3 top-1/4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E2A52C] text-[#18110d] shadow-xl">
                <FiArrowUpRight size={21} />
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-[#B9A99A]/60">
              Rooted in tradition · Made for today
            </p>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[#F6EFE1]/10 pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-[#B9A99A]">
              Honest ingredients. Familiar flavours. A little
              more soul in every meal.
            </p>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E2A52C]">
              Since tradition matters
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;