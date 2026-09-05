import { Outlet } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Root() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}