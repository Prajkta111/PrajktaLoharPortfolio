import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Eye, ArrowDown } from "lucide-react";
import TypingEffect from "./TypingEffect";

const socials = [
  { icon: Github, href: "https://github.com/Prajkta111", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prajkta-lohar-875180229/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:prajktalohar11@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+918421717749", label: "Phone" },
];

const Hero = () => (
  <section className="relative flex items-center px-4 md:px-8 pt-32 pb-0" id="hero">
    {/* Floating tech icons */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {["</>", "{}", "AI", "JS", "PY", "⚛"].map((icon, i) => (
        <span
          key={i}
          className="absolute text-muted-foreground/20 text-lg font-mono animate-float-icon"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {icon}
        </span>
      ))}
    </div>

    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-muted-foreground mb-2 text-sm tracking-widest uppercase">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
          Prajkta Dattatray{" "}
          <span className="gradient-text">Lohar</span>
        </h1>
        <div className="text-xl md:text-2xl mb-6 h-9">
          <TypingEffect />
        </div>
        <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Passionate Computer Engineering student skilled in building responsive web applications
          and intelligent ML-based systems.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href="#projects" className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
            View Projects <ArrowDown size={16} />
          </a>
          <a href="/Prajkta_Lohar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="glow-button inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:scale-105 transition-transform">
            <Eye size={16} /> Preview Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-all">
            Contact Me
          </a>
        </div>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:neon-glow transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden profile-glow gradient-border">
            <img src="/prajkta photo (1).jpg" alt="Prajkta Lohar" className="w-full h-full object-cover" />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
