import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MessageCircle, School, Lightbulb, Zap, UsersRound, RefreshCw } from "lucide-react";
import TiltCard from "./TiltCard";

const highlights = [
  { icon: MessageCircle, label: "Effective communication" },
  { icon: Lightbulb, label: "Logical & analytical thinking" },
  { icon: Zap, label: "Problem solving" },
  { icon: UsersRound, label: "Team collaboration" },
  { icon: RefreshCw, label: "Adaptability & continuous learning" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blurPx = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);
  const blurFilter = useTransform(blurPx, (v) => `blur(${v}px)`);

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <motion.div
        style={{ filter: blurFilter }}
        className="pointer-events-none absolute -left-32 top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-foreground/[0.04] to-transparent opacity-80"
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base sm:text-lg mb-3"
          >
            <span className="text-foreground/90 font-medium">Objective.</span> Analytical software developer skilled in Java, Spring Boot, React.js, JavaScript, and Python.
Built scalable web applications through academic and internship projects.Passionate about
building efficient software solutions and continuously improving technical expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="glass rounded-2xl p-6 h-full text-left border border-border/50 glow-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl border border-border/50 bg-foreground/5 flex items-center justify-center">
                    <GraduationCap className="text-foreground" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
                    <p className="font-semibold text-foreground leading-snug">
                      University College of Engineering – Ariyalur
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Engineering in Computer Science and Engineering
                  <span className="block mt-1 text-foreground/80">Present</span>
                </p>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
          >
            <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="glass rounded-2xl p-6 h-full text-left border border-border/50 glow-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl border border-border/50 bg-foreground/5 flex items-center justify-center">
                    <School className="text-foreground" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
                    <p className="font-semibold text-foreground leading-snug">Whyckoff Higher Secondary School</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Higher Secondary Education
                  <span className="block mt-1 text-foreground/80">2020 – 2022</span>
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8"
        >
          Interpersonal strengths
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={`${h.label}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
            >
              <TiltCard tiltMaxAngleX={12} tiltMaxAngleY={12}>
                <div className="glass rounded-2xl px-4 py-5 text-center glow-hover border border-border/50 hover:border-white/15 transition-colors min-h-[100px] flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="w-11 h-11 rounded-full border border-border/60 bg-card/50 flex items-center justify-center mb-2"
                  >
                    <h.icon className="text-foreground" size={20} strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-foreground font-medium text-xs sm:text-sm leading-snug">{h.label}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
