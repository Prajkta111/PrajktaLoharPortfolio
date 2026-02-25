import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Interlinked Platform for Campus Placement",
    tech: "HTML, CSS, JavaScript, MySQL",
    desc: "Web-based placement management system to reduce manual work and maintain accurate student records.",
    color: "from-purple-500/20 to-blue-500/20",
    link: "https://github.com/Prajkta111/Campus-Management-System-",
  },
  {
    title: "Sign Language Detection Using ML",
    tech: "Python, Machine Learning",
    desc: "AI system to detect and translate hand gestures into text and speech.",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://github.com/Prajkta111/Health-Predictor",
  },
  {
    title: "RoomBridge – Smart Roommate Matching",
    tech: "React 18, TypeScript, Firebase, Tailwind, Gemini AI",
    desc: "Full-stack roommate matching platform with AI compatibility scoring and real-time chat.",
    color: "from-cyan-500/20 to-purple-500/20",
    link: "https://github.com/Prajkta111/RoomBridge",
  },
  {
    title: "Evara – Static E-Commerce Website",
    tech: "HTML5, CSS3, JavaScript",
    desc: "Fully responsive e-commerce website built without frameworks.",
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://github.com/Prajkta111/e-commerce",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:neon-glow bg-gradient-to-br ${p.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg leading-snug pr-4">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-xs text-accent font-medium mb-3">{p.tech}</p>
              <motion.p
                initial={false}
                animate={{ height: expanded === i ? "auto" : "0" }}
                className="text-sm text-muted-foreground overflow-hidden"
              >
                {p.desc}
              </motion.p>
              {expanded !== i && (
                <p className="text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
