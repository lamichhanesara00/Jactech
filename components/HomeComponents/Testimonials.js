"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    rating: 4.9,
    quote:
      "I've grown my audience faster here than on any other social platform I've tried.",
    name: "Baroon Shrestha",
    company: "abc company",
    avatar: "/logo.png",
  },
  {
    id: 2,
    rating: 4.9,
    quote:
      "It's not just about followers — it's about building a real community that supports each other.",
    name: "-------",
    company: "abc company",
    avatar: "/avatars/emma.jpg",
  },
  {
    id: 3,
    rating: 4.9,
    quote:
      "User-friendly, engaging, and built for growth. Every connection I make here is meaningful.",
    name: "-------",
    company: "abc company",
    avatar: "/avatars/david.jpg",
  },
  {
    id: 4,
    rating: 4.9,
    quote:
      "It's not just about followers — it's about building a real community that supports each other.",
    name: "-------",
    company: "abc company",
    avatar: "/avatars/emma2.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between gap-6"
    >
      {/* Rating */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm font-semibold text-gray-700">
            {testimonial.rating}
            <span className="text-sm text-gray-400">/5</span>
          </span>
          <span className="text-amber-400 text-sm">★</span>
        </div>

        {/* Quote */}
        <p className="text-gray-800 text-base leading-relaxed font-medium">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0 relative">
          {testimonial.avatar && (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Left column scrolls up slightly, right column scrolls down slightly
  const leftY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const leftCards = testimonials.slice(0, 2);
  const rightCards = testimonials.slice(2, 4);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ── Left: heading + CTA ── */}
          <motion.div
            className="lg:w-[40%] shrink-0 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sm font-medium tracking-widest text-gray-600 rounded-full py-1.5 mb-6">
              Testimonials
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
              Trusted by industry experts worldwide!
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Our clients&apos; stories{" "}
              <span className="text-gray-0">
                highlight the passion and creativity in every project.
              </span>
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center gap-4"
            >
              See More
            </motion.button>
          </motion.div>

          {/* ── Right: 2-column card grid with parallax ── */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <motion.div style={{ y: leftY }} className="flex flex-col gap-4">
              {leftCards.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} index={i} />
              ))}
            </motion.div>

            <motion.div
              style={{ y: rightY }}
              className="flex flex-col gap-4 mt-8"
            >
              {rightCards.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} index={i + 2} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
