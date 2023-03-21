import { useState, useEffect } from "react";

export const useScrollDetect = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolling;
};
