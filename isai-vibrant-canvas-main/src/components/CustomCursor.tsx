import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (coarse) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const over = () => setHovering(true);
    const out = () => setHovering(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      observer.disconnect();
    };
  }, [coarse]);

  if (coarse) return null;
  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ backgroundColor: "hsl(0 0% 100%)" }}
        animate={{
          x: pos.x - (hovering ? 20 : 8),
          y: pos.y - (hovering ? 20 : 8),
          width: hovering ? 40 : 16,
          height: hovering ? 40 : 16,
          opacity: hovering ? 0.45 : 0.85,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998]"
        style={{ borderColor: "hsl(0 0% 100% / 0.35)" }}
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      />
    </>
  );
};

export default CustomCursor;
