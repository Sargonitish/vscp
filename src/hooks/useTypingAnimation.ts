'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface TypingOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export function useTypingAnimation({ text, speed = 50, delay = 1000, loop = false }: TypingOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const type = useCallback(() => {
    setIsTyping(true);
    if (indexRef.current < text.length) {
      setDisplayText(text.slice(0, indexRef.current + 1));
      indexRef.current++;
      timeoutRef.current = setTimeout(type, speed);
    } else {
      setIsTyping(false);
      if (loop) {
        timeoutRef.current = setTimeout(() => {
          indexRef.current = 0;
          setDisplayText('');
          timeoutRef.current = setTimeout(type, speed);
        }, delay);
      }
    }
  }, [text, speed, delay, loop]);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayText('');
    timeoutRef.current = setTimeout(type, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, delay, loop, type]);

  return { displayText, isTyping };
}
