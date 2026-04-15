"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-works", label: "Our works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // navState: "top" | "hidden" | "pill"
  const [navState, setNavState] = useState("top");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const current = window.scrollY;
        const prev = lastScrollY.current;

        if (current <= 20) {
          setNavState("top");
        } else if (current > prev + 4) {
          setNavState("hidden");
        } else if (prev > current + 4) {
          setNavState("pill");
        }

        lastScrollY.current = current;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isPill = navState === "pill";
  const isHidden = navState === "hidden";

  return (
    <>
      {/* ── Main Header ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center "
        style={{
          paddingTop: isPill ? "12px" : "0px",
          paddingLeft: isPill ? "16px" : "0px",
          paddingRight: isPill ? "16px" : "0px",
          transform: isHidden ? "translateY(-110%)" : "translateY(0)",
          transition:
            "transform 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isPill ? "900px" : "100%",
            transition: "max-width 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              borderRadius: isPill ? "9999px" : "0px",
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: isPill
                ? "0 4px 24px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)"
                : "0 1px 0 rgba(0,0,0,0.08)",
              border: isPill ? "1px solid rgba(0,0,0,0.08)" : "none",
              transition:
                "border-radius 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1), border 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div className="mx-auto max-w-7xl px-5 flex items-center gap-4 h-14">
              {/* Logo */}
              <Link
                href="/"
                className="mr-auto inline-flex items-center shrink-0"
              >
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={110}
                  height={34}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden items-center lg:flex" aria-label="Main">
                {links.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: active ? "#111" : "#777" }}
                    >
                      {label}
                      {active && (
                        <motion.span
                          layoutId="active-indicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                          style={{
                            height: "3px",
                            width: "3px",
                            background: "#111",
                          }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold shrink-0 transition-all duration-200 hover:opacity-80"
                style={{ background: "#111", color: "#fff" }}
              >
                Have a project in mind?
              </Link>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden flex flex-col justify-center items-end w-8 h-8 gap-[5px] ml-1"
              >
                <span
                  className="rounded-full"
                  style={{
                    display: "block",
                    height: "1.5px",
                    width: "20px",
                    background: "#111",
                    transition: "all 0.3s",
                  }}
                />
                <span
                  className="rounded-full"
                  style={{
                    display: "block",
                    height: "1.5px",
                    width: "13px",
                    background: "#111",
                    transition: "all 0.3s",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60]"
              style={{
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-up panel */}
            <motion.div
              key="panel"
              className="fixed bottom-0 left-0 right-0 z-[70]"
              style={{
                background: "#0c0c0e",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "24px 24px 0 0",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-2">
                <div
                  style={{
                    height: "4px",
                    width: "36px",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
              </div>

              {/* Top row */}
              <div className="flex items-center justify-between px-6 py-3">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={30}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav className="px-6 pt-2 pb-4">
                {links.map(({ href, label }, i) => {
                  const active = pathname === href;
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.04,
                        duration: 0.32,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-3 transition-colors duration-200"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          color: active ? "#fff" : "rgba(255,255,255,0.3)",
                        }}
                      >
                        <span className="text-[2rem] font-bold uppercase tracking-tight leading-none">
                          {label}
                        </span>
                        {active && (
                          <span
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              color: "rgba(255,255,255,0.5)",
                            }}
                          >
                            current
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                className="px-6 pb-10 pt-3 flex flex-col gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.34,
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center rounded-full py-3 text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
                  style={{ background: "#fff", color: "#0c0c0e" }}
                >
                  Have a project in mind?
                </Link>
                <p
                  className="text-center text-xs"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  hello@javtech.com · +977-9801816685
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
