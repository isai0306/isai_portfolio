import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const categories: { title: string; items: string[] }[] = [
  {
    title: "Languages & Frontend",
    items: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "React.js",
      "HTML",
      "CSS",
      "JSON",
    ],
  },
  {
    title: "Backend & Server",
    items: [
      "Spring Boot",
      "Node.js",
      "JSP",
      "Apache Tomcat",
    ],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Postman",
      "Cursor",
      "Lovable",
      "Bolt",
      "Antigravity",
      "Codex",
      "GitHub Copilot",
      "Claude",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Prompt Engineering (Basic)",
      "n8n",
    ],
  },
  {
    title: "Cloud & Concepts",
    items: [
      "Cloud Computing Basics",
    ],
  },
  {
    title: "Interpersonal Skills",
    items: [
      "Effective Communication",
      "Logical & Analytical Thinking",
      "Problem-Solving Ability",
      "Team Collaboration",
      "Adaptability",
      "Continuous Learning",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 bottom-0 w-[min(100%,480px)] h-[min(50vh,400px)] bg-gradient-to-tl from-foreground/[0.03] to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight"
        >
          Skills <span className="gradient-text">& Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Technical skills from coursework and projects — aligned with my resume.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
              className={
                cat.title === "Tools & Platforms"
                  ? "sm:col-span-2 lg:col-span-3"
                  : ""
              }
            >
              <TiltCard tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
                <div className="glass rounded-2xl p-6 h-full min-h-[140px] glow-hover border border-border/50 hover:border-white/15 transition-colors group">
                  <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    {cat.title}
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-foreground/[0.06] border border-border/40 text-foreground group-hover:border-white/10 transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
