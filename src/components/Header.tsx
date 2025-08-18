"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "spaces" | "experiences" | "gallery"
  >("spaces");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigationItems = useMemo(
    () => [
      { title: "Spaces", href: "/#spaces", sectionId: "spaces" as const },
      {
        title: "Experiences",
        href: "/#experiences",
        sectionId: "experiences" as const,
      },
      { title: "Gallery", href: "/#gallery", sectionId: "gallery" as const },
      { title: "Contact Us", href: "/contact" },
    ],
    []
  );

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [underline, setUnderline] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const getActiveKey = () => {
    for (const item of navigationItems) {
      if (isHomePage && item.sectionId) {
        if (activeSection === item.sectionId) return item.title;
      } else if (!isHomePage && !item.sectionId) {
        if (pathname === item.href) return item.title;
      }
    }
    return navigationItems[0]?.title ?? "";
  };

  const updateUnderline = () => {
    const key = getActiveKey();
    const el = itemRefs.current[key];
    const container = desktopNavRef.current;
    if (!el || !container) return;

    const itemRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const left = itemRect.left - containerRect.left;
    const width = itemRect.width;

    setUnderline((prev) => {
      if (
        Math.abs(prev.left - left) > 0.5 ||
        Math.abs(prev.width - width) > 0.5
      ) {
        return { left, width };
      }
      return prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: Array<typeof activeSection> = [
        "spaces",
        "experiences",
        "gallery",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  useEffect(() => {
    const raf = requestAnimationFrame(updateUnderline);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, pathname, isHomePage]);

  useEffect(() => {
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const isItemActive = (item: { href: string; sectionId?: string }) => {
    if (isHomePage && item.sectionId) return activeSection === item.sectionId;
    if (!isHomePage && !item.sectionId) return pathname === item.href;
    return false;
  };

  const DesktopLink = ({
    item,
  }: {
    item: { title: string; href: string; sectionId?: string };
  }) => {
    const active = isItemActive(item);

    return (
      <div
        ref={(el) => {
          itemRefs.current[item.title] = el;
        }}
        className="relative inline-flex items-center"
      >
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={(e) => {
            if (item.sectionId && isHomePage) {
              e.preventDefault();
              scrollToSection(item.sectionId);
            }
          }}
          className={`relative px-0.5 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 ${
            active ? "text-gray-900" : ""
          }`}
        >
          {item.title}
        </Link>
      </div>
    );
  };

  const MobileLink = ({
    item,
    index,
  }: {
    item: { title: string; href: string; sectionId?: string };
    index: number;
  }) => {
    const active = isItemActive(item);

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          duration: 0.4,
          delay: 0.4 + index * 0.08, // Start after container + content fade, then stagger
          ease: "easeOut",
        }}
        className="relative"
      >
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={(e) => {
            if (item.sectionId && isHomePage) {
              e.preventDefault();
              scrollToSection(item.sectionId);
            }
            setIsMobileMenuOpen(false);
          }}
          className={`block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 transform hover:translate-x-2 hover:bg-gray-50 rounded-lg ${
            active ? "text-gray-900 bg-gray-50" : ""
          }`}
        >
          {item.title}
        </Link>
        {active && (
          <motion.div
            layoutId="mobile-active-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-50 to-yellow-400 rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="w-full px-8 bg-white border border-white/30 shadow-lg rounded-b-4xl flex items-center justify-between relative z-10">
        <Link href="/" className="pb-2">
          <Image
            src="/chivla-paradise-logo.png"
            alt="Chivla Paradise"
            height={40}
            width={100}
            priority
          />
        </Link>

        <div
          ref={desktopNavRef}
          className="hidden lg:flex items-center space-x-8 relative"
        >
          {navigationItems.map((item) => (
            <DesktopLink key={item.title} item={item} />
          ))}

          <motion.div
            aria-hidden
            initial={false}
            animate={{ left: underline.left, width: underline.width }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
              mass: 0.6,
            }}
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-yellow-50 to-yellow-400 rounded-full"
            style={{ left: underline.left, width: underline.width }}
          />
        </div>

        <div className="lg:hidden">
          <div
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="lg:hidden absolute top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-xl rounded-b-4xl"
            style={{
              paddingTop: "5rem",
              marginTop: "-1rem",
            }}
          >
            <motion.div
              className="px-8 py-6 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
            >
              {navigationItems.map((item, index) => (
                <MobileLink key={item.title} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
