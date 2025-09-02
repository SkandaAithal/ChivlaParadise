"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ScrollToOnLoad = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const paramTarget = searchParams.get("scrollTo");
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const hashTarget = hash ? hash.replace(/^#/, "") : "";
    const targetId = paramTarget || hashTarget;
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerEl = document.querySelector("header") as HTMLElement | null;
        const headerHeight = headerEl?.offsetHeight ?? 0;
        const y =
          window.pageYOffset +
          element.getBoundingClientRect().top -
          headerHeight;
        window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
        if (paramTarget) {
          router.replace(`${pathname}#${targetId}`, { scroll: false });
        }
        return;
      }
      if (attempts < maxAttempts) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }, [searchParams, pathname, router]);

  return null;
};

export default ScrollToOnLoad;
