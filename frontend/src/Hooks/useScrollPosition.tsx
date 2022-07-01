import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const uodatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", uodatePosition);
    uodatePosition();
    return () => window.removeEventListener("scroll", uodatePosition);
  }, []);
  return scrollPosition;
};
