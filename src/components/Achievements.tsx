import { motion } from "framer-motion";
import { Award } from "lucide-react";

const items = [
  "Participation in Techathon 3.0",
  "Machine Learning for Data Science Projects",
  "Data Fundamentals in Data Science",
  "Java Certification – Great Learning",
  "Data Analysis with Python – IBM",
];

const Achievements = () => (
  <section id="achievements" className="section-padding relative z-10">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Achievements & <span className="gradient-text">Certifications</span>
      </motion.h2>

      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-4 flex items-center gap-4 hover:neon-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <Award size={20} />
            </div>
            <span className="text-sm">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
