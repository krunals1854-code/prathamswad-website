import { motion } from "framer-motion";

const products = [
  {
    name: "Red Chilli",
    type: "Spices",
    image: "/images/products/red-chilli.png",
    accent: "#D13A23",
  },
  {
    name: "Turmeric",
    type: "Spices",
    image: "/images/products/turmeric.jpg",
    accent: "#D99A22",
  },
  {
    name: "Garam Masala",
    type: "Blended Masala",
    image: "/images/products/garam-masala.png",
    accent: "#8C4A2F",
  },
  {
    name: "Coriander",
    type: "Spices",
    image: "/images/products/coriander.jpg",
    accent: "#68754C",
  },
  {
    name: "Black Pepper",
    type: "Spices",
    image: "/images/products/black-pepper.png",
    accent: "#3A332D",
  },
  {
    name: "Jeera",
    type: "Spices",
    image: "/images/products/jeera.png",
    accent: "#8B6842",
  },
  {
    name: "Sabzi Masala",
    type: "Blended Masala",
    image: "/images/products/sabzi-masala.png",
    accent: "#557044",
  },
  {
    name: "Paneer Masala",
    type: "Blended Masala",
    image: "/images/products/paneer-masala.png",
    accent: "#B95C28",
  },
  {
    name: "Meat Masala",
    type: "Blended Masala",
    image: "/images/products/meat-masala.png",
    accent: "#9C3526",
  },
];
const pantryProducts = [
  {
    name: "Desi Ghee",
    type: "Pure Ghee",
    image: "/images/products/desi-ghee.png",
    accent: "#C89424",
  },
  {
    name: "A2 Desi Cow Ghee",
    type: "Pure Ghee",
    image: "/images/products/a2-ghee.png",
    accent: "#B77A18",
  },
  {
    name: "Premium Chai",
    type: "Tea",
    image: "/images/products/chai.png",
    accent: "#75452C",
  },
];
const duplicatedProducts = [...products, ...products];

function ProductTicker() {
  return (
    <section
      id="products"
      className="overflow-hidden bg-[#211712] py-28 sm:py-36"
    >
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D13A23]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
                From our kitchen
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-7xl">
              Flavour for
              <span className="text-[#D13A23]"> every dish.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#B9A99A]">
            Authentic ingredients crafted to bring the
            warmth and richness of Indian kitchens to
            your everyday cooking.
          </p>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative w-full">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#211712] to-transparent sm:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#211712] to-transparent sm:w-40" />

        <div className="product-marquee flex w-max">
          {duplicatedProducts.map((product, index) => (
            <article
              key={`${product.name}-${index}`}
              className="group relative mx-3 w-[280px] shrink-0 sm:mx-4 sm:w-[340px] lg:w-[380px]"
            >
              {/* Image */}
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
                style={{
                  backgroundColor: product.accent,
                }}
              >
                <img
                  src={product.image}
                  alt={`${product.name} - PrathamSwad`}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                {/* Product info */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    {product.type}
                  </p>

                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">
                    {product.name}
                  </h3>
                </div>

                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-medium text-white/60">
                  {String((index % products.length) + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B9A99A]/60">
            Shudh Bhi, Swad Bhi.
          </span>

          <span className="text-xs uppercase tracking-[0.2em] text-[#B9A99A]/60">
            Explore our range
          </span>
        </div>
      </div>
      {/* Pantry Collection */}
<div className="mx-auto mt-32 max-w-7xl px-6 sm:px-10 lg:px-16">

  <div className="mb-12">
    <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-10 bg-[#E2A52C]" />

      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
        Beyond Spices
      </span>
    </div>

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <h3 className="max-w-2xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[#F6EFE1] sm:text-5xl lg:text-6xl">
        More goodness for
        <span className="text-[#E2A52C]"> you</span>
      </h3>

      <p className="max-w-sm text-sm leading-6 text-[#B9A99A]">
        From golden desi ghee to comforting chai,
        discover the everyday favourites that complete
        the PrathamSwad experience.
      </p>
    </div>
  </div>

  {/* Ghee + Chai */}
  <div className="grid gap-5 md:grid-cols-3">

    {pantryProducts.map((product, index) => (
      <motion.article
        key={product.name}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
        }}
        className="group relative overflow-hidden rounded-[2rem]"
        style={{
          backgroundColor: product.accent,
        }}
      >
        <div className="relative aspect-[4/5] overflow-hidden">

          <img
            src={product.image}
            alt={`${product.name} - PrathamSwad`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              {product.type}
            </p>

            <h4 className="text-2xl font-bold tracking-[-0.03em] text-white">
              {product.name}
            </h4>
          </div>

          <span className="absolute right-5 top-5 text-xs text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.article>
    ))}

  </div>
</div>
    </section>
  );
}

export default ProductTicker;