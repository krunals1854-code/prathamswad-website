import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "100% Pure Ingredients",
    description:
      "Carefully selected ingredients with the natural goodness and flavour you expect.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Eco Friendly",
    description:
      "Thoughtfully made with a growing commitment towards responsible and sustainable choices.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Quality Tested",
    description:
      "Every product goes through careful quality checks to maintain consistency and trust.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "No Artificial Colours",
    description:
      "Authentic colour, aroma and flavour without unnecessary artificial colouring.",
    icon: FlaskConical,
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#18110d] py-28 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D13A23]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
              Why PrathamSwad
            </span>
          </div>

          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-7xl">
            Good food starts
            <span className="block text-[#D13A23]">
              with good choices.
            </span>
          </h2>
        </motion.div>

        {/* Benefits */}
        <div className="border-t border-white/10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group grid gap-6 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.025] md:grid-cols-[80px_1fr_1.2fr_60px] md:items-center md:gap-8"
              >
                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-[#B9A99A]/50">
                  {benefit.number}
                </span>

                {/* Title */}
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D13A23]/30 text-[#D13A23] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D13A23] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F6EFE1] sm:text-2xl">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-lg text-sm leading-6 text-[#B9A99A] md:pl-0">
                  {benefit.description}
                </p>

                {/* Arrow */}
                <span className="hidden text-xl text-[#E2A52C] transition-transform duration-500 group-hover:translate-x-2 md:block">
                  →
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#B9A99A]">
            From our ingredients to your kitchen.
          </p>

          <p className="text-sm font-semibold tracking-wide text-[#E2A52C]">
            Shudh Bhi, Swad Bhi.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;