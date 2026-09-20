import { useEffect, useRef, useState } from "react";
import { TextLink } from "@/components/common/TextLink";
import type { SubNavItem } from "@/types/service";
import "./ServiceSubNav.css";

// Distance from the top of the viewport at which a section counts as "reached".
const SCROLL_OFFSET = 160;

interface ServiceSubNavProps {
  items: SubNavItem[];
  action: { label: string; to: string };
}

export function ServiceSubNav({ items, action }: ServiceSubNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      // Ignore scroll events while the page is animating to a clicked tab.
      if (performance.now() < lockUntil.current) return;

      const tops = items.map(
        (item) =>
          document.getElementById(item.id)?.getBoundingClientRect().top ??
          Infinity
      );

      let current = 0;

      tops.forEach((top, index) => {
        if (top <= SCROLL_OFFSET) {
          current = index;
        }
      });

      // Items side by side (the three service cards) share one top edge.
      // Keep the active one if it is in that group, otherwise use the first.
      const group = tops.flatMap((top, index) =>
        Math.abs(top - tops[current]) < 8 ? [index] : []
      );

      setActiveId((previous) => {
        if (group.length === 0) return previous;

        const previousIndex = items.findIndex(
          (item) => item.id === previous
        );

        return group.includes(previousIndex)
          ? previous
          : items[group[0]].id;
      });
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [items]);

  const handleClick = (id: string) => {
    setActiveId(id);
    lockUntil.current = performance.now() + 1200;

    // Re-check once the smooth scroll has finished.
    window.setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 1300);
  };

  return (
    <div className="service-subnav">
      <div className="container service-subnav__inner">
        <nav
          className="service-subnav__nav"
          aria-label="Services sections"
        >
          <ul className="service-subnav__list">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      isActive
                        ? "service-subnav__link is-active"
                        : "service-subnav__link"
                    }
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="service-subnav__action">
          <TextLink to={action.to}>{action.label}</TextLink>
        </div>
      </div>
    </div>
  );
}