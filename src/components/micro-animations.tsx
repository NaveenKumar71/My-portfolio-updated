import React, { useRef, useEffect, useState } from "react";

type MotionProps = {
  initial?: Record<string, number>;
  whileInView?: Record<string, number>;
  transition?: Record<string, number | string>;
  viewport?: Record<string, boolean>;
  children: React.ReactNode;
  className?: string;
};

export const motion = {
  div: ({ initial, whileInView, transition, viewport, children, className = "" }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsInView(false);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [viewport?.once]);
    
    // Convert initial and whileInView styles
    const getStyles = () => {
      if (!isInView) {
        return {
          opacity: initial?.opacity ?? 1,
          transform: `translateY(${initial?.y ?? 0}px) translateX(${initial?.x ?? 0}px)`,
          transition: 'none',
        };
      }
      
      return {
        opacity: whileInView?.opacity ?? 1,
        transform: `translateY(${whileInView?.y ?? 0}px) translateX(${whileInView?.x ?? 0}px)`,
        transition: `transform ${transition?.duration ?? 0.3}s ${transition?.delay ? `${transition.delay}s` : '0s'} ease, opacity ${transition?.duration ?? 0.3}s ${transition?.delay ? `${transition.delay}s` : '0s'} ease`,
      };
    };
    
    return (
      <div ref={ref} className={className} style={getStyles()}>
        {children}
      </div>
    );
  }
};