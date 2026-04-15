"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";

const partners = [
  { name: "Zolpa", logo: "/logo.png" },
  { name: "Community Homestay Network", logo: "/home/digital.jpg" },
  { name: "Ultima Lifestyle", logo: "/logo.png" },
  { name: "BIA Institute", logo: "/logo.png" },
  { name: "Government", logo: "/logo.png" },
  { name: "Realme", logo: "/logo.png" },
  { name: "Gadgetbyte", logo: "/logo.png" },
];

const allPartners = [...partners, ...partners];

export function PartnersSliders() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const isHovered = useRef(false);
  const speed = 0.6; // px per frame

  useAnimationFrame(() => {
    if (!trackRef.current || isHovered.current) return;

    xRef.current -= speed;

    // Reset when first half has fully scrolled
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(xRef.current) >= halfWidth) {
      xRef.current = 0;
    }

    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="py-20 bg-white">
      <p className="text-center text-xl md:text-3xl font-bold tracking-widest uppercase mb-10">
        Trusted by Industry Leaders
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-16 w-max will-change-transform"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center h-14 w-36 shrink-0 cursor-pointer"
              initial={{ opacity: 0.5, filter: "grayscale(100%)" }}
              whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="object-contain max-h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
