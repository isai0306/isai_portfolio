import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Online Exam System with Server Validation",
    points: [
      "Developed a secure web-based exam platform with authentication and server-side validation.",
      "Integrated MySQL for result storage and deployed using Apache Tomcat.",
    ],
    tech: ["Java", "JSP", "MySQL", "Apache Tomcat"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Student Exam Result Management System",
    points: [
      "Built a web application to manage student results with CRUD operations.",
      "Designed the frontend using HTML/CSS and connected to a MySQL database.",
    ],
    tech: ["HTML", "CSS", "MySQL"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Student & Mentor Dashboard System",
    subtitle: "Innovative Project",
    points: [
      "Developed a role-based dashboard with authentication and protected routes.",
      "Used React Hooks and integrated backend APIs for dynamic data handling.",
    ],
    tech: ["React.js", "Node.js"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Automotive Sprint Board System",
    points: [
      "Built a Jira-like sprint board system to manage and track automotive workflows and team tasks efficiently.",
      "Implemented a Kanban-style task management system (To-Do, In Progress, Done) to visualize work progress.",
      "Integrated Git-based automation to automatically update task status when users commit code.",
      "Developed an email dashboard to track communication and monitor work updates in real time.",
      "Connected frontend and backend for real-time data synchronization and seamless user experience.",
      "Optimized performance and UI/UX for fast and responsive interactions."
    ],
    tech: ["React.js", "Node.js"],
    demo: "https://sprint-board-ipjz.vercel.app/",
    repo: "https://github.com/isai0306/sprint_board.git",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-14 max-w-lg mx-auto text-sm sm:text-base"
        >
          Selected work from academics and personal builds — details match my resume.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <TiltCard tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
                <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col border border-border/50 hover:border-white/12 transition-colors glow-hover group">
                  <div className="h-px w-14 bg-gradient-to-r from-foreground/50 to-transparent mb-5" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:translate-y-[-1px] transition-transform leading-snug">
                    {p.title}
                  </h3>
                  {"subtitle" in p && p.subtitle ? (
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{p.subtitle}</p>
                  ) : null}
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-foreground/40 mt-1.5 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] sm:text-xs rounded-md bg-foreground/[0.07] border border-border/50 text-foreground/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <motion.a
                      href={p.demo}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={15} strokeWidth={2} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={p.repo}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/70 bg-card/30 text-sm font-medium hover:bg-muted/35 transition-colors"
                    >
                      <Github size={15} strokeWidth={2} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
