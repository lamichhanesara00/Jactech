"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.min(Math.max(-rect.top / (el.offsetHeight * 0.75), 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillWidth = `${8 + progress * 92}vw`;
  const pillHeight = `${56 + progress * 580}px`;
  const pillRadius = `${28 - progress * 28}px`;
  const pillBottom = `${Math.max(0, 40 - progress * 40)}px`;
  const textOpacity = Math.max(0, 1 - progress * 2.5);
  const textY = progress * -40;
  const btnOpacity = Math.max(0, (progress - 0.5) * 3);

  return (
    <div ref={sectionRef} style={{ height: "280vh" }} className="relative">
      {/* Sticky frame */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ✅ Stock Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero text */}
        <div
          className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            pointerEvents: progress > 0.4 ? "none" : "auto",
          }}
        >
          <h1
            className="m-0 uppercase leading-[0.9] tracking-[-0.03em] text-white"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 700,
            }}
          >
            BUILD IT ONCE.
            <br />
            BUILD IT RIGHT.
          </h1>

          <p className="mt-7 max-w-[420px] text-[11px] font-semibold uppercase leading-[1.7] tracking-[0.16em] text-gray-200">
            We deliver exceptional web experiences, branding, and digital
            solutions for ambitious companies.
          </p>
        </div>

        {/* Growing pill */}
        <div
          className="absolute left-1/2 z-10 overflow-hidden"
          style={{
            width: pillWidth,
            height: pillHeight,
            borderRadius: pillRadius,
            bottom: pillBottom,
            transform: "translateX(-50%)",
          }}
        >
          <div className="relative flex h-full w-full items-center justify-center bg-[#111]">
            <video
              src="/home/hero_vid.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: 0.15 + progress * 0.85 }}
              autoPlay
              muted
              loop
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="absolute bottom-10 left-0 right-0 z-20 flex items-end justify-between px-10"
          style={{
            opacity: btnOpacity,
            pointerEvents: progress < 0.6 ? "none" : "auto",
          }}
        >
          <Link
            href="/our-works"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-[13px] text-white backdrop-blur-md"
          >
            Explore work
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-red-500/25 bg-red-500 px-7 py-3.5 text-[13px] text-white backdrop-blur-md hover:bg-red-600"
          >
            Get in touch
          </Link>
        </div>

        {/* WhatsApp floating button - FIXED POSITION */}
        
          href="https://wa.me/9779807128557"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="h-7 w-7"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        
      </div>
    </div>
  );
}