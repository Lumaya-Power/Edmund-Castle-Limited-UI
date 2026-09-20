import { SectionHeading } from "@/components/common/SectionHeading";
import { TextLink } from "@/components/common/TextLink";
import type { ProcessStep } from "@/types/howWeWork";
import "./ProcessSteps.css";

interface ProcessStepsProps {
  eyebrow: string;
  title: string;
  intro: string;
  link: { label: string; to: string };
  steps: ProcessStep[];
}

export function ProcessSteps({ eyebrow, title, intro, link, steps }: ProcessStepsProps) {
  return (
    <section className="process" aria-labelledby="process-title">
      <div className="container">
        <div className="process__header">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} id="process-title" />
            <p className="process__intro">{intro}</p>
          </div>
          <TextLink to={link.to}>{link.label}</TextLink>
        </div>

        <ol className="process__list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="process__step">
                <span className="process__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="process__content">
                  <Icon
                    className="process__icon"
                    size={38}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__text">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}