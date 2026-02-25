import { useState, useEffect } from "react";

const phrases = [
  "Computer Engineering Student",
  "Java Developer",
  "Software Developer",
];

const TypingEffect = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && charIndex === 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="gradient-text font-semibold">
      {phrases[phraseIndex].slice(0, charIndex)}
      <span className="typing-cursor" />
    </span>
  );
};

export default TypingEffect;
