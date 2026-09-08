import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },

  {
    name: "Our Story",
    href: "#story",
  },

  {
    name: "Products",
    href: "#products",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

/* =========================================================
   PRODUCT MEGA MENU
========================================================= */

const productCategories = [
  {
    name: "Spices",
    items: [
      {
        name: "Red Chilli",
        href: "/products/red-chilli",
      },
      {
        name: "Turmeric",
        href: "/products/turmeric",
      },
      {
        name: "Black Pepper",
        href: "/products/black-pepper",
      },
      {
        name: "Coriander",
        href: "/products/coriander",
      },
      {
        name: "Jeera",
        href: "/products/jeera",
      },
      {
        name: "Garam Masala",
        href: "/products/garam-masala",
      },
      {
        name: "Paneer Masala",
        href: "/products/paneer-masala",
      },
      {
        name: "Sabzi Masala",
        href: "/products/sabzi-masala",
      },
      {
        name: "Meat Masala",
        href: "/products/meat-masala",
      },
    ],
  },

  {
    name: "Ghee",
    items: [
      {
        name: "Desi Ghee",
        href: "/products/desi-ghee",
      },
      {
        name: "A2 Cow Ghee",
        href: "/products/a2-cow-ghee",
      },
    ],
  },

  {
    name: "Tea",
    items: [
      {
        name: "Premium Chai",
        href: "/products/premium-chai",
      },
    ],
  },

  {
    name: "Dry Fruits",
    items: [
      {
        name: "Almonds",
        href: "/products/almonds",
      },
      {
        name: "Cashews",
        href: "/products/cashews",
      },
      {
        name: "Dates",
        href: "/products/dates",
      },
    ],
  },
];

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  /* =========================================================
     SCROLL NAVBAR
  ========================================================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          const progress = Math.min(scrollY / 180, 1);

          setScrollProgress(progress);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  /* =========================================================
     NAVBAR MORPHING
  ========================================================= */

  const horizontalMargin = scrollProgress * 24;

  const topPadding = scrollProgress * 16;

  const navWidth = `${100 - scrollProgress * 4}%`;

  const borderRadius = scrollProgress * 999;

  const backgroundOpacity = 0.05 + scrollProgress * 0.78;

  const borderOpacity = 0.1 + scrollProgress * 0.05;

  const shadowOpacity = scrollProgress * 0.35;

  const blur = scrollProgress * 18;

  const navPaddingX = 24 + scrollProgress * 4;

  const navPaddingY = 20 - scrollProgress * 8;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        paddingTop: `${topPadding}px`,
        paddingLeft: `${horizontalMargin}px`,
        paddingRight: `${horizontalMargin}px`,
      }}
    >
      <nav
        className="relative mx-auto flex items-center justify-between"
        style={{
          width: navWidth,

          paddingLeft: `${navPaddingX}px`,
          paddingRight: `${navPaddingX}px`,

          paddingTop: `${navPaddingY}px`,
          paddingBottom: `${navPaddingY}px`,

          borderRadius: `${borderRadius}px`,

          border: `1px solid rgba(246, 239, 225, ${borderOpacity})`,

          backgroundColor: `rgba(24, 17, 13, ${backgroundOpacity})`,

          backdropFilter: `blur(${blur}px)`,

          boxShadow: `0 12px 40px rgba(0, 0, 0, ${shadowOpacity})`,

          transition:
            "padding 120ms linear, border-radius 120ms linear, background-color 120ms linear, backdrop-filter 120ms linear, box-shadow 120ms linear",
        }}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#home"
          aria-label="PrathamSwad - Home"
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src="/images/pratham.png"
            alt="PrathamSwad"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-8 md:flex">

          {/* HOME */}

          <a
            href="#home"
            className="text-sm font-medium text-[#F6EFE1]/75 transition-colors duration-300 hover:text-[#E2A52C]"
          >
            Home
          </a>

          {/* STORY */}

          <a
            href="#story"
            className="text-sm font-medium text-[#F6EFE1]/75 transition-colors duration-300 hover:text-[#E2A52C]"
          >
            Our Story
          </a>

          {/* =================================================
              PRODUCTS MEGA MENU
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            {/* Trigger */}

            <a
              href="#products"
              className="flex items-center gap-1.5 py-3 text-sm font-medium text-[#F6EFE1]/75 transition-colors duration-300 hover:text-[#E2A52C]"
            >
              Products

              <FiChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </a>

            {/* Mega Menu */}

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 12,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#211712]/95 p-6 shadow-2xl backdrop-blur-2xl">

                    {/* Menu Header */}

                    <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
                          Explore our collection
                        </p>

                        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#F6EFE1]">
                          Authentic flavour, thoughtfully sourced.
                        </h2>
                      </div>

                      <span className="text-xs text-[#B9A99A]/50">
                        PrathamSwad
                      </span>
                    </div>

                    {/* =================================================
                        CATEGORIES
                    ================================================= */}

                    <div className="grid grid-cols-4 gap-6">

                      {productCategories.map((category) => (
                        <div key={category.name}>

                          {/* Category Name */}

                          <div className="mb-4 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D13A23]" />

                            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F6EFE1]">
                              {category.name}
                            </h3>
                          </div>

                          {/* Product Rows */}

                          <div className="space-y-1">
                            {category.items.map((product) => (
                              <a
                                key={product.name}
                                href={product.href}
                                className="group flex items-center justify-between rounded-xl px-2 py-2 transition-all duration-200 hover:bg-white/5"
                              >
                                <span className="text-sm text-[#B9A99A] transition-colors duration-200 group-hover:text-[#F6EFE1]">
                                  {product.name}
                                </span>

                                <FiArrowUpRight
                                  size={13}
                                  className="text-[#E2A52C] opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <p className="text-xs text-[#B9A99A]/60">
                        Discover the complete PrathamSwad range.
                      </p>

                      <a
                        href="#products"
                        className="group flex items-center gap-2 rounded-full bg-[#D13A23] px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#E3482F]"
                      >
                        View all products

                        <FiArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </a>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONTACT */}

          <a
            href="#contact"
            className="text-sm font-medium text-[#F6EFE1]/75 transition-colors duration-300 hover:text-[#E2A52C]"
          >
            Contact
          </a>
        </div>

        {/* =================================================
            DESKTOP CTA
        ================================================= */}

        <div className="hidden md:block">
          <a
            href="#products"
            className="group flex items-center gap-2 rounded-full bg-[#E3482F] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F05A3F] hover:shadow-lg"
          >
            Explore

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        </div>

        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F6EFE1] md:hidden"
        >
          {mobileOpen ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#211712]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">

              {/* Home */}

              <a
                href="#home"
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#F6EFE1]/80 hover:bg-white/5"
              >
                Home
              </a>

              {/* Story */}

              <a
                href="#story"
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#F6EFE1]/80 hover:bg-white/5"
              >
                Our Story
              </a>

              {/* =================================================
                  MOBILE PRODUCTS
              ================================================= */}

              <button
                onClick={() =>
                  setProductsOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[#F6EFE1]/80 hover:bg-white/5"
              >
                Products

                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-5 px-4 pb-4 pt-2">

                      {productCategories.map((category) => (
                        <div key={category.name}>

                          <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E2A52C]">
                            {category.name}
                          </h3>

                          <div className="space-y-1">
                            {category.items.map((product) => (
                              <a
                                key={product.name}
                                href={product.href}
                                onClick={closeMobileMenu}
                                className="block py-1.5 text-xs text-[#B9A99A] transition-colors hover:text-[#F6EFE1]"
                              >
                                {product.name}
                              </a>
                            ))}
                          </div>

                        </div>
                      ))}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact */}

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#F6EFE1]/80 hover:bg-white/5"
              >
                Contact
              </a>

              {/* CTA */}

              <a
                href="#products"
                onClick={closeMobileMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#E3482F] px-4 py-3 text-sm font-semibold text-white"
              >
                Explore Products

                <FiArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;