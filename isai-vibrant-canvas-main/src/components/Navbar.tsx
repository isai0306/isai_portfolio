import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/5 dark:shadow-black/40" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          IK
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden border border-border/60"
          >
            {links.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-3.5 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors text-sm"
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
