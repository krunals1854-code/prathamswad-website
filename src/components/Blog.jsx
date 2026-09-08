import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const blogs = [
  {
    category: "Kitchen Stories",
    title: "The secret behind perfectly balanced Indian flavours",
    date: "12 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Spice Guide",
    title: "5 essential spices every Indian kitchen should have",
    date: "04 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Recipes",
    title: "Bring warmth to your table with simple everyday recipes",
    date: "28 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#18110d] py-28 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#D13A23]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E2A52C]">
                From the Kitchen
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F6EFE1] sm:text-6xl lg:text-7xl"
            >
              Stories worth
              <span className="block text-[#D13A23]">
                savouring.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-sm leading-6 text-[#B9A99A]"
          >
            Discover recipes, ingredient stories and simple
            ways to bring more flavour into your everyday
            cooking.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{
                opacity: 0,
                y: 45,
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
                delay: index * 0.12,
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F6EFE1] text-[#18110d] transition-all duration-300 group-hover:rotate-45">
                  <FiArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2A52C]">
                    {blog.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#B9A99A]/40" />

                  <span className="text-xs text-[#B9A99A]/60">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F6EFE1] transition-colors duration-300 group-hover:text-[#E2A52C]">
                  {blog.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B9A99A]">
                  Read story

                  <FiArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-7"
        >
          <a
            href="#"
            className="group flex items-center justify-between text-sm font-medium text-[#B9A99A]"
          >
            <span>Explore all stories</span>

            <FiArrowUpRight
              size={18}
              className="text-[#E2A52C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Blog;