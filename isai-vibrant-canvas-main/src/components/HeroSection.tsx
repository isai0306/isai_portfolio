import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import portraitImg from "@/assets/portrait.png";

const TECH_LINE = "React | Java | Node | MySQL";

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    let mode: "type" | "hold" | "erase" = "type";
    let tid: ReturnType<typeof setTimeout>;

    const run = () => {
      if (cancelled) return;
      if (mode === "type") {
        if (i < TECH_LINE.length) {
          i += 1;
          setTyped(TECH_LINE.slice(0, i));
          tid = setTimeout(run, 45);
        } else {
          mode = "hold";
          tid = setTimeout(() => {
            mode = "erase";
            run();
          }, 2200);
        }
      } else if (mode === "erase") {
        if (i > 0) {
          i -= 1;
          setTyped(TECH_LINE.slice(0, i));
          tid = setTimeout(run, 28);
        } else {
          mode = "type";
          tid = setTimeout(run, 400);
        }
      }
    };

    tid = setTimeout(run, 500);
    return () => {
      cancelled = true;
      clearTimeout(tid);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(0_0%_100%_/0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(0_0%_100%_/0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
          <motion.div
            style={{ y, scale: imgScale }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[min(100%,380px)] aspect-[3/4]"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent opacity-60 blur-xl" />
              <div className="relative h-full rounded-[1.75rem] overflow-hidden border border-white/10 bg-card/40 backdrop-blur-xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.55)]">
                <motion.img
                  src={portraitImg}
                  alt="Isai Kumar K — portrait"
                  className="h-full w-full object-cover object-[center_20%] grayscale contrast-[1.05]"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.35em] uppercase text-muted-foreground mb-5 font-medium"
            >
              Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="text-4xl sm:text-6xl lg:text-[3.35rem] xl:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-3"
            >
              Hi, I&apos;m Isai Kumar K
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-6"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Detail-oriented Computer Science Engineering student building reliable, scalable web
              applications — seeking internship opportunities to grow and contribute.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                Tech stack
              </span>
              <div className="font-mono text-sm sm:text-base text-foreground/95 min-h-[1.75rem] flex items-center justify-center lg:justify-start">
                <span>{typed}</span>
                <span className="inline-block w-[2px] h-5 ml-0.5 bg-foreground/80 animate-pulse align-middle" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-foreground text-background font-medium text-sm shadow-lg hover:opacity-95 transition-opacity glow-hover"
              >
                View Projects <ChevronRight size={16} strokeWidth={2} />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border/80 bg-card/30 backdrop-blur-md text-foreground font-medium text-sm hover:bg-muted/40 transition-colors glow-hover"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground" size={22} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
