import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-muted/30 pointer-events-none">
      <motion.div
        className="h-full bg-foreground/90"
        initial={false}
        animate={{ width: `${progress * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 28 }}
      />
    </div>
  );
};

export default ScrollProgress;
