import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import "./Logo.css";

/**
 * Placeholder wordmark. To use the real logo, drop the file in public/images
 * and replace the <svg> below with an <img>.
 */
export function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${siteConfig.name} home`}>
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="24" y="31" textAnchor="middle" className="logo__mark-text">
          EC
        </text>
      </svg>
      <span className="logo__text">
        <span className="logo__name">Edmund Castle</span>
        <span className="logo__sub">Limited</span>
      </span>
    </Link>
  );
}
