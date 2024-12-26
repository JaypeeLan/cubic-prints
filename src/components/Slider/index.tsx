import React, { useEffect, useRef, useState } from "react";
import "./slider.css";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
  props?: unknown;
};

const Slider = ({ children, className = "", ...props }: SliderProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const checkArrowVisibility = () => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Check if content width exceeds container width
    const hasOverflow = content.scrollWidth > container.clientWidth;

    // Only show arrows if there's overflow
    if (hasOverflow) {
      const scrollLeft = container.scrollLeft;
      const maxScroll = content.scrollWidth - container.clientWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScroll);
    } else {
      // Hide both arrows if no overflow
      setShowLeftArrow(false);
      setShowRightArrow(false);
    }
  };

  // Check on mount and when children change
  useEffect(() => {
    checkArrowVisibility();

    // Add resize observer to check when container size changes
    const resizeObserver = new ResizeObserver(() => {
      checkArrowVisibility();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.clientWidth * 0.5;
    const newScrollLeft =
      containerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    checkArrowVisibility();
  };

  return (
    <div className={`slider-container ${className}`} {...props}>
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="slider-arrow slider-arrow-left"
          aria-label="Scroll left"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="slider-arrow slider-arrow-right"
          aria-label="Scroll right"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="slider-wrapper"
      >
        <div ref={contentRef} className="slider-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
