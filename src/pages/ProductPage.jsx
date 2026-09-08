import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

const products = {
  "red-chilli": {
    name: "Red Chilli",
    category: "Spices",
    tagline: "Bold heat. Rich colour. Authentic flavour.",
    description:
      "Carefully selected red chillies that bring vibrant colour, warmth and authentic Indian flavour to everyday cooking.",
    image: "/images/products/red-chilli.png",
    accent: "#D13A23",
  },

  turmeric: {
    name: "Turmeric",
    category: "Spices",
    tagline: "Golden colour. Pure warmth.",
    description:
      "Naturally vibrant turmeric with earthy aroma and rich golden colour, perfect for everyday Indian cooking.",
    image: "/images/products/turmeric.png",
    accent: "#E2A52C",
  },

  "black-pepper": {
    name: "Black Pepper",
    category: "Spices",
    tagline: "Sharp aroma. Deep character.",
    description:
      "Bold black pepper selected for its distinctive aroma, warmth and naturally sharp flavour.",
    image: "/images/products/black-pepper.png",
    accent: "#6F6258",
  },

  coriander: {
    name: "Coriander",
    category: "Spices",
    tagline: "Fresh aroma. Authentic taste.",
    description:
      "Aromatic coriander that adds freshness, balance and unmistakable Indian flavour to every dish.",
    image: "/images/products/coriander.png",
    accent: "#7B8F45",
  },

  jeera: {
    name: "Jeera",
    category: "Spices",
    tagline: "Earthy aroma. Timeless flavour.",
    description:
      "Carefully sourced cumin with a warm earthy aroma that forms the foundation of countless Indian recipes.",
    image: "/images/products/jeera.png",
    accent: "#A47A3B",
  },

  "garam-masala": {
    name: "Garam Masala",
    category: "Blended Masalas",
    tagline: "Warm spices. Deep flavour.",
    description:
      "A balanced blend of aromatic spices crafted to add warmth, depth and richness to everyday cooking.",
    image: "/images/products/garam-masala.png",
    accent: "#A75B32",
  },

  "paneer-masala": {
    name: "Paneer Masala",
    category: "Blended Masalas",
    tagline: "Rich masala. Restaurant-style flavour.",
    description:
      "A deliciously balanced blend created to bring rich colour, aroma and flavour to paneer dishes.",
    image: "/images/products/paneer-masala.png",
    accent: "#D13A23",
  },

  "sabzi-masala": {
    name: "Sabzi Masala",
    category: "Blended Masalas",
    tagline: "Everyday vegetables, elevated.",
    description:
      "A versatile blend designed to add warmth, aroma and character to everyday vegetable dishes.",
    image: "/images/products/sabzi-masala.png",
    accent: "#5C8A3B",
  },

  "meat-masala": {
    name: "Meat Masala",
    category: "Blended Masalas",
    tagline: "Bold spices. Richer meals.",
    description:
      "A robust blend of aromatic spices crafted to bring depth, warmth and irresistible flavour to meat dishes.",
    image: "/images/products/meat-masala.png",
    accent: "#9B402A",
  },

  "desi-ghee": {
    name: "Desi Ghee",
    category: "Ghee",
    tagline: "Rich aroma. Traditional goodness.",
    description:
      "Traditional desi ghee with a rich aroma and smooth texture, made for everyday cooking and indulgent meals.",
    image: "/images/products/desi-ghee.png",
    accent: "#E2A52C",
  },

  "a2-cow-ghee": {
    name: "A2 Cow Ghee",
    category: "Ghee",
    tagline: "Pure tradition in every spoon.",
    description:
      "Rich and aromatic A2 cow ghee made to bring traditional goodness and authentic flavour to your kitchen.",
    image: "/images/products/a2-cow-ghee.png",
    accent: "#D99B27",
  },

  "premium-chai": {
    name: "Premium Chai",
    category: "Tea",
    tagline: "A comforting cup, every time.",
    description:
      "A carefully selected tea blend with a rich aroma and comforting character for your everyday chai moments.",
    image: "/images/products/chai.png",
    accent: "#B8753C",
  },

  almonds: {
    name: "Almonds",
    category: "Dry Fruits",
    tagline: "Crunchy. Nutty. Naturally delicious.",
    description:
      "Premium almonds selected for their satisfying crunch, rich taste and everyday versatility.",
    image: "/images/products/almonds.png",
    accent: "#B88A62",
  },

  cashews: {
    name: "Cashews",
    category: "Dry Fruits",
    tagline: "Creamy crunch. Naturally indulgent.",
    description:
      "Carefully selected cashews with a naturally creamy texture and satisfying crunch.",
    image: "/images/products/cashews.png",
    accent: "#D3A86E",
  },

  dates: {
    name: "Dates",
    category: "Dry Fruits",
    tagline: "Naturally sweet. Richly satisfying.",
    description:
      "Naturally sweet dates with a soft texture and rich caramel-like flavour, perfect for snacking and recipes.",
    image: "/images/products/dates.png",
    accent: "#7B4B2D",
  },
};

function ProductPage() {
  const { slug } = useParams();
  const product = products[slug];

  if (!product) {
    return (
      <main className="min-h-screen bg-[#18110d] text-[#F6EFE1] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[#B9A99A] mb-4">Product not found.</p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#F6EFE1] hover:text-[#E3482F] transition-colors"
          >
            <FiArrowLeft />
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-[#18110d] text-[#F6EFE1] overflow-hidden"
      style={{
        "--product-accent": product.accent,
      }}
    >
      {/* Background atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(
              circle at 82% 48%,
              ${product.accent}55 0%,
              transparent 38%
            )
          `,
        }}
      />

      {/* Back */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-8 lg:pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#B9A99A] hover:text-[#F6EFE1] transition-colors"
        >
          <FiArrowLeft />
          Back to products
        </Link>
      </div>

      {/* Product */}
      <section className="relative z-10 min-h-[calc(100vh-90px)] flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* soft glow only */}
            <div
              className="absolute w-[70%] h-[70%] rounded-full blur-[100px] opacity-25"
              style={{
                backgroundColor: product.accent,
              }}
            />

            {/* Actual image */}
            <div className="relative w-full max-w-[560px]">
              <img
                src={product.image}
                alt={`${product.name} - PrathamSwad`}
                className="
                  w-full
                  h-auto
                  max-h-[680px]
                  object-contain
                  rounded-[1.5rem]
                  relative
                  z-10
                "
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-5"
              style={{ color: product.accent }}
            >
              {product.category}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]">
              {product.name}
            </h1>

            <p
              className="mt-7 text-xl sm:text-2xl font-medium"
              style={{ color: product.accent }}
            >
              {product.tagline}
            </p>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[#B9A99A]">
              {product.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                href={`https://wa.me/919920106800?text=${encodeURIComponent(
                  `Hi PrathamSwad, I want to enquire about ${product.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E3482F]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  hover:bg-[#D13A23]
                  transition-all
                  duration-300
                "
              >
                Enquire about product
                <FiArrowUpRight />
              </a>

              <Link
                to="/#products"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/15
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-[#F6EFE1]
                  hover:bg-white/5
                  transition-all
                  duration-300
                "
              >
                View collection
              </Link>
            </div>

            {/* Trust */}
            <div className="mt-12 pt-7 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="font-semibold">Pure</p>
                <p className="mt-1 text-sm text-[#B9A99A]">Ingredients</p>
              </div>

              <div>
                <p className="font-semibold">Quality</p>
                <p className="mt-1 text-sm text-[#B9A99A]">Tested</p>
              </div>

              <div>
                <p className="font-semibold">Trusted</p>
                <p className="mt-1 text-sm text-[#B9A99A]">Flavours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;