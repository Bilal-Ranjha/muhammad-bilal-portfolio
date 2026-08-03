"use client";

import { useEffect, useState } from "react";

export function useTypingText(words: string[], typingSpeed = 78, pauseMs = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[wordIndex] ?? "";
    const complete = letterIndex === activeWord.length;
    const empty = letterIndex === 0;
    const delay = complete && !isDeleting ? pauseMs : isDeleting ? typingSpeed / 2 : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (complete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (empty && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, pauseMs, typingSpeed, wordIndex, words]);

  return words[wordIndex]?.slice(0, letterIndex) ?? "";
}
