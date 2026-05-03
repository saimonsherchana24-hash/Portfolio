import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    tags: ["ENTERPRISE ARCHITECTURE", "JAVA SUITE"],
    title: "Gym Management System",
    description: "Developing a comprehensive administrative ecosystem for fitness centers. Engineered with advanced member tracking, automated recurring billing, and optimized scheduling algorithms.",
    tech: ["Java", "MySQL", "SwingUI"],
    cta: "VIEW TECHNICAL CASE STUDY",
    imageAlign: "left" as const,
  },
  {
    tags: ["UI/UX CASE STUDY", "ECOMMERCE"],
    title: "Hamro Ghadi",
    description: "A premium digital atelier for horology enthusiasts. Focused on high-fidelity motion design, fluid typography, and a seamless checkout experience that mirrors the luxury of the products.",
    tech: ["Figma", "TailwindCSS", "GSAP"],
    cta: "EXPLORE DESIGN SYSTEM",
    imageAlign: "right" as const,
  },
  {
    tags: ["TOOLING", "PYTHON"],
    title: "Mart Billing System",
    description: "Optimizing retail operations with a high-performance POS system. Features include real-time inventory synchronization, SKU-based data analytics, and encrypted transactional logging.",
    tech: ["Python", "SQLite", "Tkinter"],
    cta: "REVIEW LOGIC DOCUMENTATION",
    imageAlign: "left" as const,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-8 animate-fade-in">
        <span className="inline-block text-xs font-medium tracking-widest px-4 py-1.5 rounded-full border border-primary/30 text-primary mb-6">
          ✦ CURATED PORTFOLIO
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="font-display italic">Selected</span>{" "}
          <span className="gradient-text font-display italic">Creations</span>
        </h1>

        <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
          Exploring the intersection of high-fidelity aesthetic design and engineering rigor. A showcase of architectural systems and digital experiences.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                project.imageAlign === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              {/* Image placeholder */}
              <div className="w-full md:w-1/2 aspect-[4/3] glass-card rounded-xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium tracking-wider px-3 py-1 rounded-full border border-accent/30 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground">#{t}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent hover:text-primary transition-colors">
                  {project.cta} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
