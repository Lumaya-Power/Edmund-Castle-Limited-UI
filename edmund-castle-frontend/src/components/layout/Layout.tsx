import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer = 0;

    // The page may still be loading (lazy routes), so retry briefly.
    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        return;
      }
      if (attempts++ < 20) timer = window.setTimeout(scrollToTarget, 50);
    };

    timer = window.setTimeout(scrollToTarget, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}