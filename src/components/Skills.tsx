import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiMysql, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiBootstrap,
  SiCplusplus
} from "react-icons/si";
import { TbBrain, TbNetwork } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { DiCode } from "react-icons/di";

const skills = [
  {
    name: "Java",
    icon: FaJava,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-[#007396]",
    level: 85,
  },
  {
    name: "Python",
    icon: SiPython,
    color: "from-blue-500/20 to-yellow-500/20",
    iconColor: "text-[#3776AB]",
    level: 80,
  },
  {
    name: "C",
    icon: DiCode,
    color: "from-blue-600/20 to-blue-400/20",
    iconColor: "text-[#A8B9CC]",
    level: 75,
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "from-blue-700/20 to-purple-500/20",
    iconColor: "text-[#00599C]",
    level: 70,
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "from-orange-600/20 to-orange-400/20",
    iconColor: "text-[#E34F26]",
    level: 90,
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "from-blue-500/20 to-blue-300/20",
    iconColor: "text-[#1572B6]",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "from-yellow-500/20 to-yellow-300/20",
    iconColor: "text-[#F7DF1E]",
    level: 80,
  },
  {
    name: "React",
    icon: SiReact,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-[#61DAFB]",
    level: 75,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "from-blue-600/20 to-cyan-500/20",
    iconColor: "text-[#4479A1]",
    level: 80,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "from-green-600/20 to-green-400/20",
    iconColor: "text-[#47A248]",
    level: 70,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-[#FFCA28]",
    level: 75,
  },
  {
    name: "Git",
    icon: SiGit,
    color: "from-orange-600/20 to-red-500/20",
    iconColor: "text-[#F05032]",
    level: 80,
  },
  {
    name: "Machine Learning",
    icon: TbBrain,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    level: 75,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "from-purple-600/20 to-purple-400/20",
    iconColor: "text-[#7952B3]",
    level: 75,
  },
  {
    name: "OOP",
    icon: BiCodeBlock,
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500",
    level: 85,
  },
  {
    name: "Networking",
    icon: TbNetwork,
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
    level: 70,
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className={`glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 bg-gradient-to-br ${skill.color} group`}
    >
      <div className={`text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center ${skill.iconColor}`}>
        <IconComponent />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
      <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{skill.level}%</p>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="section-padding relative z-10">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Skills</span> & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
