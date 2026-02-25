import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "prajktalohar11@gmail.com", href: "mailto:prajktalohar11@gmail.com" },
  { icon: Phone, label: "+91-8421717749", href: "tel:+918421717749" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prajkta-lohar-875180229/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Prajkta111" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    window.location.href = `mailto:prajktalohar11@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:neon-glow transition-all duration-300 hover:-translate-y-0.5 block"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <c.icon size={20} />
                </div>
                <span className="text-sm text-muted-foreground">{c.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="glow-button w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:scale-[1.02] transition-transform"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
