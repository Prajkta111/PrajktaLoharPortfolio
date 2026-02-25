import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  {
    year: "2026",
    title: "Parvatibai Genba Moze College of Engineering, Pune",
    degree: "B.E – Computer Engineering",
    score: "CGPA: 9.10",
  },
  {
    year: "2023",
    title: "Government Polytechnic, Karad",
    degree: "Diploma",
    score: "84.23%",
  },
  {
    year: "2020",
    title: "Shri Mhalsakant Vidyamandir, Pal",
    degree: "SSC",
    score: "92.60%",
  },
];

const Education = () => (
  <section id="education" className="section-padding relative z-10">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-16 pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary neon-glow flex items-center justify-center">
              <GraduationCap size={12} className="text-primary-foreground" />
            </div>
            <div className="glass rounded-xl p-5 hover:neon-glow transition-all duration-300">
              <span className="text-xs text-accent font-semibold">{item.year}</span>
              <h3 className="font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.degree} | {item.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
