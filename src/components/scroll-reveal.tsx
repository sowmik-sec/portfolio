"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type CSSProperties,
  type Ref,
} from "react";

interface ScrollRevealProps {
  as?: "div" | "article" | "section" | "li" | "header";
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  threshold?: number;
  rootMargin?: string;
  id?: string;
  style?: CSSProperties;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

export function ScrollReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
  style,
  ...rest
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentEl = elementRef.current;
    if (!currentEl) return;

    // Strictly respect reduced motion preferences
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      currentEl.setAttribute("data-reveal", "visible");
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      currentEl.setAttribute("data-reveal", "visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentEl.setAttribute("data-reveal", "visible");
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const combinedStyle: CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };

  const sharedProps = {
    "data-reveal": "pending",
    style: combinedStyle,
    className,
    ...rest,
  };

  switch (as) {
    case "article":
      return (
        <article ref={elementRef as Ref<HTMLElement>} {...sharedProps}>
          {children}
        </article>
      );
    case "section":
      return (
        <section ref={elementRef as Ref<HTMLElement>} {...sharedProps}>
          {children}
        </section>
      );
    case "li":
      return (
        <li ref={elementRef as Ref<HTMLLIElement>} {...sharedProps}>
          {children}
        </li>
      );
    case "header":
      return (
        <header ref={elementRef as Ref<HTMLElement>} {...sharedProps}>
          {children}
        </header>
      );
    default:
      return (
        <div ref={elementRef as Ref<HTMLDivElement>} {...sharedProps}>
          {children}
        </div>
      );
  }
}
