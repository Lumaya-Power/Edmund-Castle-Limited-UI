import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavLinks } from "@/components/navigation/NavLinks";
import { siteConfig } from "@/config/site";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-header__nav" aria-label="Primary">
          <NavLinks />
        </nav>

        <div className="site-header__actions">
          <Button to={siteConfig.cta.to} className="site-header__cta">
            {siteConfig.cta.label}
          </Button>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu id="mobile-menu" open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
