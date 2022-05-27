import { useRef, useEffect, useCallback } from "react";

const useIntersectReveal = (
  duration = 1,
  delay = 0,
  opacity = 1,
  scale = false
) => {
  const element = useRef<HTMLDivElement | null>(null!);

  const onScroll = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = `${opacity}`;
        current.style.transform = scale ? `scale(1,1)` : "";
      }
    },
    [delay, duration, opacity, scale]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: scale ? "scale(0,0)" : "" },
  };
};

export default useIntersectReveal;
