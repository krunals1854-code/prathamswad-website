import { motion } from "framer-motion";
import {
  Store,
  Truck,
  Network,
  PackageCheck,
  Globe2,
} from "lucide-react";

const partners = [
  {
    title: "Retailers",
    icon: Store,
  },
  {
    title: "Distributors",
    icon: Truck,
  },
  {
    title: "Super Distributors",
    icon: Network,
  },
  {
    title: "Bulk Buyers",
    icon: PackageCheck,
  },
  {
    title: "Export",
    icon: Globe2,
  },
];

const tickerItems = [...partners, ...partners];

function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#211712] py-28 sm:py-36"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D13A23]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
              Partner With Us
            </span>
          </div>

          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-7xl">
            Let's grow
            <span className="text-[#D13A23]"> together.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#B9A99A]">
            Whether you are a retailer, distributor or looking
            for bulk and export opportunities, let's bring
            authentic flavours to more kitchens.
          </p>
        </motion.div>
      </div>

      {/* Infinite ticker */}
      <div className="relative overflow-hidden border-y border-white/10 py-8">

        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#211712] to-transparent sm:w-40" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#211712] to-transparent sm:w-40" />

        <div className="partner-marquee flex w-max">
          {tickerItems.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <div
                key={`${partner.title}-${index}`}
                className="mx-6 flex items-center gap-5 sm:mx-10"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#D13A23]"
                />

                <span className="whitespace-nowrap text-2xl font-semibold tracking-[-0.03em] text-[#F6EFE1] sm:text-3xl">
                  {partner.title}
                </span>

                <span className="ml-5 text-xl text-[#E2A52C]">
                  ✦
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-5 px-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
        <p className="max-w-md text-sm leading-6 text-[#B9A99A]">
          Interested in becoming a PrathamSwad partner?
          We'd love to hear from you.
        </p>

        <a
          href="#contact"
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D13A23] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E0472F]"
        >
          Become a partner

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

export default Partners;