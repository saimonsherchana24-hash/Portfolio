import { Monitor, Briefcase, FolderOpen, Lightbulb } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/", label: "HOME", icon: Monitor },
  { path: "/experience", label: "EXPERIENCE", icon: Briefcase },
  { path: "/projects", label: "PROJECTS", icon: FolderOpen },
  { path: "/skills", label: "SKILLS", icon: Lightbulb },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-nav/90 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around max-w-lg mx-auto py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-nav-active/20 nav-glow"
                  : "hover:bg-secondary/50"
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  isActive ? "bg-nav-active text-background" : ""
                }`}
              >
                <Icon size={20} className={isActive ? "text-background" : "text-muted-foreground"} />
              </div>
              <span
                className={`text-[10px] font-medium tracking-wider ${
                  isActive ? "text-nav-active" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
