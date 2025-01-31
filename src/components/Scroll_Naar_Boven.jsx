import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollNaarBoven() {
  const { pad } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pad]);

  return null;
}

export default ScrollNaarBoven;
