import { Lightbulb, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">○</span>
          </div>
          <span className="font-semibold italic text-foreground">S.S.</span>
        </div>
        <div className="flex items-center gap-4">
          <Lightbulb size={18} className="text-muted-foreground" />
          <Menu size={18} className="text-muted-foreground" />
        </div>
      </div>
    </header>
  );
};

export default Header;
