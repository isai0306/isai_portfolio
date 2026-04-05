import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

const bullets = [
  "Served as a Student Coordinator for a college-level symposium.",
  "Designed digital invitations for a Web Development event.",
  "Coordinated with team members to ensure smooth communication and successful event execution.",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight"
        >
          Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Leadership and creative contribution on campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <TiltCard tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.01}>
            <div className="glass rounded-2xl p-8 sm:p-10 glow-hover border border-border/50 hover:border-white/15 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center border border-border/40 shrink-0">
                  <Sparkles className="text-foreground" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">
                    Student Coordinator – College Symposium
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    University College of Engineering – Ariyalur
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="text-sm sm:text-base text-muted-foreground flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-foreground/50 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
