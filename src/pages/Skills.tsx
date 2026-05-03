import Layout from "@/components/Layout";
import { Lightbulb, Languages } from "lucide-react";

const Skills = () => {
  return (
    <Layout>
      <section className="py-8 animate-fade-in">
        <p className="text-xs font-semibold tracking-widest text-nav-active uppercase mb-3">Creative Profile</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
          Design &{" "}
          <span className="gradient-text">User<br />Experience</span>
        </h1>

        {/* Design Arsenal */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Lightbulb size={20} className="text-accent" />
            <h2 className="text-lg font-bold text-foreground">Design Arsenal</h2>
          </div>

          <div className="space-y-3">
            <div className="glass-card p-5">
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-semibold mb-3">Core Design Skills</p>
              <div className="flex flex-wrap gap-2">
                {["Prototyping", "User Research", "Visual Design", "Interaction Design"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-5">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-semibold mb-3">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe CC"].map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card p-5">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-semibold mb-3">Dev Bridge</p>
                <div className="flex flex-wrap gap-2">
                  {["HTML/CSS", "JavaScript"].map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Languages size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-foreground">Communication</h2>
          </div>

          <div className="glass-card p-5 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">Nepali</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">Native</span>
              </div>
              <div className="w-full h-1 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-full rounded-full gradient-btn" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">English</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">Fluent</span>
              </div>
              <div className="w-full h-1 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[85%] rounded-full gradient-btn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
