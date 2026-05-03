import Layout from "@/components/Layout";
import { MapPin, Mail, Sparkles, Palette, Code, Layers } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section className="py-8 animate-fade-in">
        {/* Tags */}
        <div className="flex gap-3 mb-6">
          <span className="text-xs font-medium tracking-wider px-3 py-1.5 rounded-full border border-primary/30 text-primary">
            ✦ AVAILABLE FOR TRAINING
          </span>
          <span className="text-xs font-medium tracking-wider px-3 py-1.5 rounded-full border border-accent/30 text-accent">
            UI/UX DESIGNER
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Saimon
          <br />
          <span className="gradient-text">Sherchan</span>
        </h1>

        {/* Bio */}
        <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
          Hello, I am a Bachelor-level fresher with an interest in UI/UX design. I have
          basic knowledge of HTML and CSS and have worked on a website project
          focused on clean and user-friendly design. I am eager to learn, improve my
          skills, and grow in a professional environment.
        </p>

        {/* Info Cards */}
        <div className="space-y-3 mb-8">
          <div className="glass-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <MapPin size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-[10px] tracking-wider text-muted-foreground uppercase">Location</p>
              <p className="text-sm font-medium text-foreground">Pokhara-8, Simalchour</p>
            </div>
          </div>
          <div className="glass-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Mail size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-[10px] tracking-wider text-muted-foreground uppercase">Email</p>
              <p className="text-sm font-medium text-foreground">sherchansaimon9@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 max-w-md mb-16">
          <button className="w-full gradient-btn text-background font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 tracking-wide text-sm hover:opacity-90 transition-opacity">
            HIRE ME <Sparkles size={16} />
          </button>
          <button className="w-full border border-border bg-secondary/50 text-foreground font-semibold py-3.5 rounded-lg tracking-wide text-sm hover:bg-secondary transition-colors">
            EXPLORE PORTFOLIO
          </button>
        </div>

        {/* Creative Focus */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Creative Focus</h2>
        <div className="space-y-3">
          <div className="glass-card p-6">
            <Palette size={24} className="text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">
              Designing immersive interfaces that balance aesthetic elegance with functional clarity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card p-5">
              <Code size={20} className="text-accent mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Web Dev</h3>
              <p className="text-xs text-muted-foreground">Clean, scalable code architecture.</p>
            </div>
            <div className="glass-card p-5">
              <Layers size={20} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Prototypes</h3>
              <p className="text-xs text-muted-foreground">High-fidelity interaction models.</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="quote-gradient rounded-xl p-8 mt-10 text-center">
          <p className="text-xl md:text-2xl font-display italic text-foreground/90">
            "Design is the <span className="gradient-text font-semibold">soul</span> of digital architecture."
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
