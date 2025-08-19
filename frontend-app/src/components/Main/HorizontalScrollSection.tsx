"use client";
import { useRef, useEffect, ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      container.classList.add("cursor-grabbing");
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
    };

    const onMouseLeave = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Sensibilidad arrastre
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    // Listener en window para detectar el mouseup globalmente
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="scrollbar-none select-none flex overflow-x-auto space-x-6"
      style={{ cursor: "grab" }}
    >
      {children}
    </div>
  );
}




