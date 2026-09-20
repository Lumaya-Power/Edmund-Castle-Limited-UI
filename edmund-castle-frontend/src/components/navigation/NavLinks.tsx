import { NavLink } from "react-router-dom";
import { siteConfig } from "@/config/site";
import "./NavLinks.css";

interface NavLinksProps {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

export function NavLinks({ orientation = "horizontal", onNavigate }: NavLinksProps) {
  return (
    <ul className={`nav-links nav-links--${orientation}`}>
      {siteConfig.nav.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              isActive ? "nav-links__link is-active" : "nav-links__link"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
