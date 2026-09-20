import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { SocialIcon } from "@/components/common/SocialIcon";
import { NavLinks } from "@/components/navigation/NavLinks";
import { siteConfig } from "@/config/site";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <Logo />

          <nav className="site-footer__nav" aria-label="Footer">
            <NavLinks />
          </nav>

          <ul className="site-footer__social">
            {siteConfig.social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} (opens in a new tab)`}
                >
                  <SocialIcon name={item.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>

          <p className="site-footer__tagline">{siteConfig.tagline}</p>
        </div>

        <div className="site-footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="site-footer__legal">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
