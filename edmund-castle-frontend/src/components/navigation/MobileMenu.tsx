import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/site";
import { NavLinks } from "./NavLinks";
import "./MobileMenu.css";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          className="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          <nav className="container mobile-menu__inner" aria-label="Mobile">
            <NavLinks orientation="vertical" onNavigate={onClose} />
            <Button to={siteConfig.cta.to} className="mobile-menu__cta" onClick={onClose}>
              {siteConfig.cta.label}
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
