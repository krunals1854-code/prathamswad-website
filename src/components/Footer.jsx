import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const exploreLinks = [
  { name: "About PrathamSwad", href: "#story" },
  { name: "Knowledge Hub", href: "#blog" },
  { name: "Partner With Us", href: "#partners" },
  { name: "Contact Us", href: "#contact" },
];

const productLinks = [
  { name: "Spices", href: "#products" },
  { name: "Blended Masalas", href: "#products" },
  { name: "Ghee", href: "#products" },
  { name: "Tea", href: "#products" },
  { name: "Dry Fruits", href: "#products" },
];

function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#110c09] text-[#F6EFE1]"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[35rem] w-[35rem] rounded-full bg-[#D13A23]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-24 sm:px-10 lg:px-16 lg:pt-32">

        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href="#home"
              className="inline-block"
              aria-label="PrathamSwad - Home"
            >
              <img
                src="https://prathamswad.com/wp-content/uploads/2026/08/PrathamSwad-Indian-Spices-Blended-Masala-Ghee-Tea-Dry-Fruits-Copy-300x50.png"
                alt="PrathamSwad"
                className="h-auto w-[220px] object-contain"
              />
            </a>

            <p className="mt-8 max-w-md text-base leading-7 text-[#B9A99A]">
              PrathamSwad brings Pure Indian Spices, Blended Masalas,
              Ghee, Tea & Dry Fruits, with Quality, Trust and Purpose —
              thoughtfully sourced and responsibly partnered.
            </p>

            <a
              href="#partners"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#E2A52C]"
            >
              Partner with us

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2A52C]/30 transition-all duration-300 group-hover:bg-[#E2A52C] group-hover:text-[#110c09]">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </a>
          </motion.div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={exploreLinks}
          />

          {/* Products */}
          <FooterColumn
            title="Products"
            links={productLinks}
          />

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <FooterHeading>Connect</FooterHeading>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#D13A23]"
                />

                <p className="text-sm leading-6 text-[#B9A99A]">
                  36, Bhoomi Heights,
                  <br />
                  Sector 8, Kharghar,
                  <br />
                  Navi Mumbai – 410210
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+919920106800"
                className="flex items-center gap-3 text-sm text-[#B9A99A] transition-colors hover:text-[#E2A52C]"
              >
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D13A23]"
                />

                <span className="font-medium text-[#F6EFE1]">
                  +91 99201 06800
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@prathamswad.com"
                className="flex items-center gap-3 text-sm text-[#B9A99A] transition-colors hover:text-[#E2A52C]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D13A23]"
                />

                hello@prathamswad.com
              </a>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock3
                  size={17}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#D13A23]"
                />

                <div className="text-sm leading-6 text-[#B9A99A]">
                  <p className="mb-1 font-medium text-[#F6EFE1]">
                    Hours of Operation
                  </p>

                  <p>
                    Mon – Sat:
                    <span className="ml-1 text-[#F6EFE1]">
                      10:00 AM – 7:00 PM
                    </span>
                  </p>

                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-[#B9A99A]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PrathamSwad. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-[#E2A52C]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#E2A52C]"
            >
              Terms & Conditions
            </a>
          </div>

          <a
            href="#home"
            className="group flex items-center gap-2 text-[#E2A52C]"
          >
            Back to top

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Reusable Components ---------- */

function FooterHeading({ children }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F6EFE1]">
        {children}
      </h3>

      <span className="h-px w-8 bg-[#D13A23]" />
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <FooterHeading>{title}</FooterHeading>

      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group flex items-center gap-2 text-sm text-[#B9A99A] transition-colors duration-300 hover:text-[#F6EFE1]"
          >
            <span>{link.name}</span>

            <ArrowUpRight
              size={13}
              className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </nav>
    </motion.div>
  );
}

export default Footer;