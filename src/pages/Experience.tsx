import Layout from "@/components/Layout";
import { GraduationCap, Rocket } from "lucide-react";

const Experience = () => {
  return (
    <Layout>
      <section className="py-8 animate-fade-in">
        <span className="inline-block text-xs font-medium tracking-widest px-4 py-1.5 rounded-full border border-primary/30 text-primary mb-6">
          ✦ ACADEMIC & PROFESSIONAL JOURNEY
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Experience
          <br />
          <span className="gradient-text">& Education</span>
        </h1>

        <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
          Building a solid foundation in software engineering through academic excellence and focused technical specialization.
        </p>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-nav-active" />
            <span className="text-xs font-semibold tracking-widest text-nav-active uppercase">Education</span>
          </div>

          <div className="relative pl-6 border-l border-border space-y-6">
            <div className="glass-card p-6 max-w-md">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">2024 — 2027</span>
              </div>
              <h3 className="font-bold text-foreground mb-1">Informatics College Pokhara</h3>
              <p className="text-sm font-medium text-nav-active mb-2">Bachelor in Information Technology (BIT)</p>
              <p className="text-sm text-muted-foreground">
                Currently pursuing a comprehensive degree focused on modern software, architecture, and innovative problem solving.
              </p>
            </div>

            <div className="glass-card p-6 max-w-md">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">2021 — 2023</span>
              </div>
              <h3 className="font-bold text-foreground mb-1">Motherland Secondary School</h3>
              <p className="text-sm text-muted-foreground">+2 Science/Computer Science</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Experience</span>
          </div>

          <div className="glass-card p-6 max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Rocket size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Fresher</h3>
                <p className="text-xs font-medium tracking-wider text-accent uppercase">Actively Developing</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              As a dedicated fresher, I am currently channelling my technical curiosity into mastering the core pillars of modern development. My focus is on building scalable backends and intuitive interfaces.
            </p>
            <p className="text-[10px] tracking-widest text-primary uppercase font-semibold mb-3">Core Specialization</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Web Development", "Database Management"].map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-6 max-w-md">
          <h3 className="text-lg font-bold text-foreground mb-2">Available for Projects</h3>
          <p className="text-sm text-muted-foreground mb-4">Open to internships and exciting new collaborations.</p>
          <button className="w-full gradient-btn text-background font-semibold py-3 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity">
            CONNECT
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
