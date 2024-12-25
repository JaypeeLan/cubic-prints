import React, { useEffect, useRef, useState } from "react";
import "./slider.css";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
};

const Slider = ({ children, className = "" }: SliderProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const checkArrowVisibility = () => {
    if (!containerRef.current || !contentRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkArrowVisibility();
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.clientWidth * 0.8;
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
    <div className={`slider-container ${className}`}>
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
