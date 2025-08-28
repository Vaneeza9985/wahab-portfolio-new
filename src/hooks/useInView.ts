import { useEffect, useState, RefObject } from 'react';

export function useInView(ref: RefObject<Element>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}