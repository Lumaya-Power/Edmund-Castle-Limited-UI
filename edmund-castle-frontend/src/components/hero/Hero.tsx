import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/common/Button";
import { homeContent } from "@/config/homeContent";
import "./Hero.css";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={item}>
            Construction &amp; Property Technical Services
          </motion.p>
          <motion.h1 id="hero-title" className="hero__title" variants={item}>
            Construction projects need more than good design.
          </motion.h1>
          <motion.p className="hero__lead" variants={item}>
            They need coordination, cost control and technical clarity.
          </motion.p>
          <motion.p className="hero__text" variants={item}>
            We provide project management, cost and commercial services, and technical design
            support for construction and property projects across the UK and internationally.
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <Button to="/contact">Discuss Your Project</Button>
            <Button to="/services" variant="outline-light" arrow={false}>
              Our Services
            </Button>
          </motion.div>
        </motion.div>

        <p className="hero__signoff">Built for a better tomorrow.</p>

        <ul className="hero__reach">
          {homeContent.reach.map(({ label, icon: Icon }) => (
            <li key={label} className="hero__reach-item">
              <Icon size={18} aria-hidden="true" />
              {label}
            </li>
          ))}
          <li className="hero__reach-note">
            Technical expertise. Commercial control. Projects delivered with confidence.
          </li>
        </ul>
      </div>
    </section>
  );
}
