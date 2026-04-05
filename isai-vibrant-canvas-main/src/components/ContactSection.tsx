import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l3.221 3.221 7.631-7.631a1.374 1.374 0 00-.961-2.316zm-3.221 3.221L2.644 10.639a1.374 1.374 0 000 1.942l7.618 7.618a1.374 1.374 0 001.942 0l7.618-7.618a1.374 1.374 0 000-1.942l-7.618-7.618a1.374 1.374 0 00-1.942 0z" />
  </svg>
);

const LINKEDIN = "https://www.linkedin.com/in/isai-kumar-6111752a2";
const LEETCODE = "https://leetcode.com/u/Isaikumar";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    { label: "LinkedIn", href: LINKEDIN, icon: Linkedin, display: "linkedin.com/in/isai-kumar" },
    { label: "LeetCode", href: LEETCODE, icon: LeetCodeIcon, display: "leetcode.com/u/Isaikumar" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="max-w-xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-3 tracking-tight"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.08 }}
          className="text-center text-muted-foreground mb-10 text-sm sm:text-base"
        >
          Isai Kumar K — open to internships and collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="glass rounded-2xl p-8 sm:p-10 border border-border/55 glow space-y-8"
        >
          <a
            href="mailto:isaikumark0303@gmail.com"
            className="flex items-start gap-4 group rounded-xl p-1 -m-1 transition-colors hover:bg-foreground/[0.03]"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/40">
              <Mail size={18} strokeWidth={1.75} className="text-foreground" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium break-all group-hover:underline underline-offset-4">
                isaikumark0303@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+917871828115"
            className="flex items-start gap-4 group rounded-xl p-1 -m-1 transition-colors hover:bg-foreground/[0.03]"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/40">
              <Phone size={18} strokeWidth={1.75} className="text-foreground" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium group-hover:underline underline-offset-4">7871828115</p>
            </div>
          </a>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center sm:text-left">
              Profiles
            </p>
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-1 items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/50">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{s.display}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
