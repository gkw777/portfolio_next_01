'use client';

import { useCallback, useEffect, useRef } from 'react';

interface FadeInProps {
  direction: string;
  duration: number;
  delay: number;
  scroll_threshold: number;
}

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0, scroll_threshold = 0.5): FadeInProps => {
  const element = useRef<HTMLElement>(null);
  const observer = useRef<IntersectionObserver>();

  const handleDirection = useCallback((name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return '';
    }
  }, []);

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element as any;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
        // 애니메이션 끝나면 감시 중지
        const timer = setTimeout(() => {
          current.style.transitionProperty = 'none';
          observer.current?.unobserve(current);
          clearTimeout(timer);
        }, (duration + delay) * 1000);
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    const { current } = element;
    if (current) {
      observer.current = new IntersectionObserver(onScroll, {
        threshold: scroll_threshold
      });
      observer.current.observe(current);
    }

    return () => observer && observer.current?.disconnect();
  }, [onScroll, scroll_threshold]);

  return { ref: element, style: { opacity: 0, transform: handleDirection(direction) } } as any;
};

export default useScrollFadeIn;
