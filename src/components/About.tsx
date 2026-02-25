import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import profileImg2 from "@/assets/profile2.jpg";

const stats = [
  { label: "CGPA", value: 9.10, suffix: "", decimals: 2 },
  { label: "Diploma", value: 84.23, suffix: "%", decimals: 2 },
  { label: "SSC", value: 92.6, suffix: "%", decimals: 1 },
  { label: "Internship", value: 3, suffix: " Months", decimals: 0 },
];

const Counter = ({ target, decimals, suffix }: { target: number; decimals: number; suffix: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setVal(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-4 md:py-6 px-4 md:px-8 relative z-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden profile-glow">
              <img src={profileImg2} alt="Prajkta working" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Computer Engineering student from Parvatibai Genba Moze College of Engineering,
              Pune (CGPA: 9.10). I have strong foundations in programming, machine learning, and web
              technologies. I enjoy building real-world solutions that improve efficiency and user
              experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl font-bold gradient-text">
                    <Counter target={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
