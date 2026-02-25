import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const responsibilities = [
  "Built responsive UI using HTML, CSS, JS, Bootstrap",
  "Worked on Hirrlani Chaha website",
  "Contributed to E-commerce platform",
  "Designed reusable components",
  "Ensured mobile responsiveness",
];

const Experience = () => (
  <section id="experience" className="section-padding relative z-10">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Experience</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 md:p-8 hover:neon-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/20 text-primary">
            <Briefcase size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold">BrainlyHood Technologies Pvt Ltd – Pune</h3>
            <p className="text-sm text-accent">Frontend Development Intern</p>
            <p className="text-xs text-muted-foreground">Dec 2024 – Feb 2025</p>
          </div>
        </div>
        <ul className="space-y-2 ml-1">
          {responsibilities.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {r}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Experience;
