import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24 max-w-4xl mx-auto px-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
